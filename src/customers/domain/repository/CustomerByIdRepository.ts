import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import Customer from "../entity/Customer";




export default class CustomerByIdRepository implements repository <number, Customer> {
    async execute(id: number): Promise<Customer> {

        const connection = await ConnectionSource.connect();

        const customer = await connection.getRepository(Customer).findOneBy({
            id, 
        });

        if  (!customer) {
            throw new Error(`Customer with id ${id} not found`);
        }

        return customer;

    }
};