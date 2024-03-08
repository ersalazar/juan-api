import useCase from "../../utils/infrastructure/useCase";
import Customer from "../domain/entity/Customer";
import AllCustomersRepository from "../domain/repository/AllCustomersRepository";




export default class AllCustomerUseCase implements useCase<void, Customer[]> {

    protected allCustomerRepository: AllCustomersRepository;

    constructor() {
        this.allCustomerRepository = new AllCustomersRepository();
    }

    async execute(): Promise<Customer[]> {
        
        const customers = await this.allCustomerRepository.execute();

        return customers;
    }
}