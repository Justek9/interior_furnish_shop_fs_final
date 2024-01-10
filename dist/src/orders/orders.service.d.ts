import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createOrder(orderData: CreateOrderDto): Promise<Order>;
    getAll(): Promise<Order[]>;
}
