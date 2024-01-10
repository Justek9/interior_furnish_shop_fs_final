import { OrdersService } from './orders.service';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersService);
    createOrder(orderData: any): Promise<import(".prisma/client").Order>;
    getAll(): any;
}
