import Joi from "joi";
import Product from "../domain/entity/Product";
import CreateProductUseCase from "../useCase/CreateProductUseCase";



export default class NewProductAdapter {

    protected createProductUseCase: CreateProductUseCase;

    constructor() {
        this.createProductUseCase = new CreateProductUseCase();
    }

    async execute(body: any): Promise<Product> {

        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            stock: Joi.number().required(),
        })
        
        const { error } = schema.validate(body);

        if (error) {
            console.error('Invalid data:', error.details[0].message);
            throw new Error('Invalid data: ' + JSON.stringify(error));
        }

        const product = {
            name: body.name,
            description: body.description,
            price: body.price,
            stock: body.stock
        }

        const result = await this.createProductUseCase.execute(product);
        return result;
    }
}