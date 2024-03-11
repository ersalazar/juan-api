import Joi from "joi";
import Customer from "../domain/entity/Customer";
import CreateCustomerUseCase from "../useCase/CreateCustomerUseCase";



export default class NewCustomerAdapter {

    protected createCustomerUseCase: CreateCustomerUseCase;

    constructor() {
        this.createCustomerUseCase = new CreateCustomerUseCase();
    }

    async execute(body: any): Promise<Customer> {

        const schema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
            address: Joi.string().required(),
        })

        const { error } = schema.validate(body);

        if (error) {
            console.error('Invalid data:', error.details[0].message);
            throw new Error('Invalid data: ' + JSON.stringify(error));
        }

        const customer = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone,
            address: body.address
        }

        const result = await this.createCustomerUseCase.execute(customer);
        return result;
    }
}
