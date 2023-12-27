import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  async getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getByID(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Get('/search/:searchPhrase')
  async getBySearchPhrase(@Param('searchPhrase') searchPhrase: string) {
    const products = await this.productsService.getBySearchPhrase(searchPhrase);
    if (!products || products.length === 0) {
      throw new NotFoundException('Products not found');
    }
    return products;
  }
}
