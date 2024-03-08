import Joi from "joi";
import UpdateCustomerUseCase from "../useCase/UpdateCustomerUseCase";
import UpdateCustomer from "../domain/dto/UpdateCustomer";



export default class UpdateCustomerAdapter {

    protected updateCustomerUseCase: UpdateCustomerUseCase;

    constructor() {
        this.updateCustomerUseCase = new UpdateCustomerUseCase();
    }

    async execute(id: number, body: any) {

        if (!id) {
            throw new Error('id must be provided');
        }

        const schema = Joi.object({
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            phone: Joi.string(),
            address: Joi.string(),
        })

        const { error } = schema.validate(body);

        if (error) {
            console.error('Invalid data:', error.details[0].message);
            throw new Error('Invalid data: ' + JSON.stringify(error));
        }

        const props: UpdateCustomer = {
            id,
            data: body
        }

        const result = await this.updateCustomerUseCase.execute(props);
        return result;
    }

}