import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { OrderProductDto } from './order-products.dtos';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  products: OrderProductDto[];

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsString()
  orderRemarks: string;

  @IsNotEmpty()
  @IsNumber()
  shippingCost: number;

  createdAt: Date;

  @IsNumber()
  discount: number;
}
