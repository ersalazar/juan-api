import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import Product from "../entity/Product";



export default class AllProductsRepository implements repository <void, Product[]> {
    async execute(): Promise<Product[]> {
        const connection = await ConnectionSource.connect();

        const products = await connection.getRepository(Product).find();

        if (products.length === 0) {
            throw new Error('Products not found');
        }

        return products;
    }
}