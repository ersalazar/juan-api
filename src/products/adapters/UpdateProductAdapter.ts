import Joi from "joi";
import Product from "../domain/entity/Product";
import UpdateProductUseCase from "../useCase/UpdateProductUseCase";



export default class UpdateProductAdapter {
    protected updateProductUseCase: any;

    constructor() {
        this.updateProductUseCase = new UpdateProductUseCase();
    }

    async execute(body: any): Promise<Product> {
        const schema = Joi.object({
            id: Joi.number().required(),
            name: Joi.string(),
            price: Joi.number(),
            stock: Joi.number(),
            description: Joi.string(),
        })

        const { error } = schema.validate(body);

        if (error) {
            console.error('Invalid data:', error.details[0].message);
            throw new Error('Invalid data: ' + JSON.stringify(error));
        }

        const result = await this.updateProductUseCase.execute(body);
        return result;
    }
}