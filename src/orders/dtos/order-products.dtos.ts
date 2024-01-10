import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class OrderProductDto {
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  qty: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  remarks: string;
}
