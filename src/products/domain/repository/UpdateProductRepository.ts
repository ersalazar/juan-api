import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import UpdateProduct from "../dto/updateProduct";
import Product from "../entity/Product";



export default class UpdateProductRepository implements repository<UpdateProduct, Product> {
    async execute(props: UpdateProduct): Promise<Product> {
        const connection = await ConnectionSource.connect();

        const product = await connection.getRepository(Product).findOneBy({
            id: props.id,
        });

        
        if (!product) {
            throw new Error(`Product with id ${props.id} not found`);
        }
        
     

        if (props.name) {
            product.name = props.name;
        }

        if (props.description) {
            product.description = props.description;
        }
        
        if (props.price) {
            product.price = props.price;
        }
        
        if (props.stock) {
            product.stock = props.stock;
        }

        await connection.getRepository(Product).save(product);
        
        return product;
    }
}