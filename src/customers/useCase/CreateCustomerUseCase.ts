import useCase from "../../utils/infrastructure/useCase";
import NewCustomer from "../domain/dto/NewCustomer";
import Customer from "../domain/entity/Customer";
import CreateCustomerRepository from "../domain/repository/CreateCustomerRepository";





export default class CreateCustomerUseCase implements useCase<NewCustomer, Customer> {
    protected createCustomerRepository: CreateCustomerRepository;
    
    constructor() {
        this.createCustomerRepository = new CreateCustomerRepository();
    }

    async execute(data: NewCustomer): Promise<Customer> {
        const newCustomer = await this.createCustomerRepository.execute(data);
        return newCustomer;
    }
}
