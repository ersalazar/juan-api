import useCase from "../../utils/infrastructure/useCase";
import Customer from "../domain/entity/Customer";
import CustomerByIdRepository from "../domain/repository/CustomerByIdRepository";




export default class CustomerByIdUseCase implements useCase<number, Customer> {
    
    protected customerByIdRepository: CustomerByIdRepository;

    constructor() {
        this.customerByIdRepository = new CustomerByIdRepository();
    }

    async execute(id: number): Promise<Customer> {

        const customer = await this.customerByIdRepository.execute(id);

        return customer;
        
    }
}