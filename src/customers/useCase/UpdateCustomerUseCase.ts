import useCase from "../../utils/infrastructure/useCase";
import UpdateCustomer from "../domain/dto/UpdateCustomer";
import Customer from "../domain/entity/Customer";
import UpdateCustomerRepository from "../domain/repository/UpdateCustomerRepository";




export default class UpdateCustomerUseCase implements useCase<UpdateCustomer, Customer> {
    protected updateCustomerRepository: UpdateCustomerRepository;

    constructor() {
        this.updateCustomerRepository = new UpdateCustomerRepository();
    }

    async execute(props: UpdateCustomer): Promise<Customer> {
        const updatedCustomer = await this.updateCustomerRepository.execute(props);
        return updatedCustomer;
    }
}