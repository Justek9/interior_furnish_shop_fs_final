import { OrderProductDto } from './order-products.dtos';
export declare class CreateOrderDto {
    id: string;
    products: OrderProductDto[];
    address: string;
    orderRemarks: string;
    shippingCost: number;
    createdAt: Date;
    discount: number;
}
