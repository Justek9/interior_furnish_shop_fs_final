import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(orderData: any) {
    // const { products, orderRemarks, address, shippingCost } = orderData;

    try {
      const createdOrder = await this.prismaService.order.create({
        data: {
          address: orderData.address,
          orderRemarks: orderData.orderRemarks || '',
          shippingCost: orderData.shippingCost,
          products: {
            create: orderData.products.map((product) => ({
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
