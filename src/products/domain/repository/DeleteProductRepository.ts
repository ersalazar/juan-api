import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import Product from "../entity/Product";



export default class DeleteProductRepository implements repository<number, void> {
    async execute(id: number): Promise<void> {
        const connection = await ConnectionSource.connect();

        const product = await connection.getRepository(Product).findOneBy({
            id,
        });

        if (!product) {
            throw new Error('Product not found');
        }

        await connection.getRepository(Product).delete(id);

        return;
    }
}