import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import Customer from "../entity/Customer";




export default class AllCustomersRepository implements repository<null, Customer[]> {

    async execute(): Promise<Customer[]> {

        const connection = await ConnectionSource.connect();

        const customers = await connection.getRepository(Customer).find();

        if(customers.length === 0) {
            throw new Error("No customers found");
        }

        return customers;
    }
}