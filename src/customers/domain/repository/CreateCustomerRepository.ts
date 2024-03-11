import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import NewCustomer from "../dto/NewCustomer";
import Customer from "../entity/Customer";

export default class CreateCustomerRepository implements repository<NewCustomer, Customer> {
    async execute(data: NewCustomer): Promise<Customer> {
        const connection = await ConnectionSource.connect();

        const newCustomer = await connection.getRepository(Customer).create(data);
        await connection.getRepository(Customer).save(newCustomer);
        return newCustomer;
    }
}