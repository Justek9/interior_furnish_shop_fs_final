import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(orderData: CreateOrderDto) {
    const { products, orderRemarks, address, shippingCost, discount } =
      orderData;

    try {
      const createdOrder = await this.prismaService.order.create({
        data: {
          address,
          orderRemarks: orderRemarks || '',
          shippingCost,
          discount,
          products: {
            create: products.map((product) => ({
              product: {
                create: {
                  id: product.id,
                  price: product.price,
                  qty: product.qty,
                  name: product.name,
                  remarks: product.remarks,
                },
              },
            })),
          },
        },
      });

      return createdOrder;
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }

  async getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: { products: { include: { product: true } } },
    });
  }
}
