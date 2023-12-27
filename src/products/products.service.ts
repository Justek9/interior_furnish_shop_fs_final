import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: { imgs: true },
    });
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: { imgs: true },
    });
  }

  public async getBySearchPhrase(
    searchPhrase: string,
  ): Promise<Product[] | null> {
    const products = await this.prismaService.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchPhrase,
            },
          },
          {
            description: {
              contains: searchPhrase,
            },
          },
          {
            category: {
              contains: searchPhrase,
            },
          },
        ],
      },
    });

    return products;
  }
}
