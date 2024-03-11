import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import NewProduct from "../dto/newProduct";
import Product from "../entity/Product";



export default class CreateProductRepository implements repository<NewProduct, Product> {
    async execute(data: NewProduct): Promise<Product> {
        const connection = await ConnectionSource.connect();

        const newProduct = await connection.getRepository(Product).create(data);
        await connection.getRepository(Product).save(newProduct);
        return newProduct;
    }
}
