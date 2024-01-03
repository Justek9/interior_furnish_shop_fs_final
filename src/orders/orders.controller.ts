import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Post('/create-order')
  async createOrder(@Body() orderData: any) {
    return this.orderService.createOrder(orderData);
  }

  @Get('/')
  getAll(): any {
    return this.orderService.getAll();
  }
}
