import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import Product from "../entity/Product";





export default class ProductByIdRepository implements repository<number, Product> {

    async execute(id: number): Promise<Product> {
        const connection = await ConnectionSource.connect();

        const product = await connection.getRepository(Product).findOneBy   ({
            id,
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }
}