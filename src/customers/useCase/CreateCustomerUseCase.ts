import useCase from "../../utils/infrastructure/useCase";
import OdooClient from "../../utils/odooConection/createOdooClient";
import OdooCreateRepository from "../../utils/odooConection/odooCreateRepository";
import NewCustomer from "../domain/dto/NewCustomer";
import Customer from "../domain/entity/Customer";
import CreateCustomerRepository from "../domain/repository/CreateCustomerRepository";





export default class CreateCustomerUseCase implements useCase<NewCustomer, Customer> {
    protected createCustomerRepository: CreateCustomerRepository;
    protected odooClient: OdooClient;
    protected odooCreateRepository: OdooCreateRepository;
    
    constructor() {
        this.createCustomerRepository = new CreateCustomerRepository();
        this.odooClient = new OdooClient();
        this.odooCreateRepository = new OdooCreateRepository();
    }

    async execute(data: NewCustomer): Promise<Customer> {
        const newCustomer = await this.createCustomerRepository.execute(data);
        const odooUid = await this.odooClient.execute();
        this.odooCreateRepository.execute({
            uid: odooUid,
            endpoint: "res.partner",
            data: {
                name: data.firstName + " " + data.lastName,
                email: data.email,
                mobile: data.phone,
                
            }
        
        });
        return newCustomer;
    }
}
