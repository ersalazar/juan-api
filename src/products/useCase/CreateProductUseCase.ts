import useCase from "../../utils/infrastructure/useCase";
import OdooClient from "../../utils/odooConection/createOdooClient";
import OdooCreateRepository from "../../utils/odooConection/odooCreateRepository";
import NewProduct from "../domain/dto/newProduct";
import Product from "../domain/entity/Product";
import CreateProductRepository from "../domain/repository/CreateProductRepository";


export default class CreateProductUseCase implements useCase<NewProduct, Product> {

    protected createProductRepository: CreateProductRepository;
    odooClient: OdooClient;
    odooCreateRepository: OdooCreateRepository;

    constructor() {
        this.createProductRepository = new CreateProductRepository();
        this.odooClient = new OdooClient();
        this.odooCreateRepository = new OdooCreateRepository();
    }

    async execute(props: NewProduct): Promise<Product> {
        const newProduct = await this.createProductRepository.execute(props);
        const odooUid = await this.odooClient.execute();
        this.odooCreateRepository.execute({
            uid: odooUid,
            endpoint: "product.product",
            data: {
                name: props.name, // Maps directly as the props's name.
                description_sale: props.description, // In Odoo, 'description_sale' is used for the sales description.
                list_price: props.price, // 'list_price' is typically used in Odoo to represent the sales price.
                active: 'active', // In Odoo, 'active' is a boolean, often used to indicate if the props is available.
                type: 'product', // In Odoo, 'type' is used to indicate the type of product, such as 'service', 'consu' or 'product'.
            }
            
        
        });

        return newProduct;
    }

}