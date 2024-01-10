import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<import(".prisma/client").Product[]>;
    getByID(id: string): Promise<import(".prisma/client").Product>;
    getBySearchPhrase(searchPhrase: string): Promise<import(".prisma/client").Product[]>;
}
