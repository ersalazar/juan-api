import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import UpdateCustomer from "../dto/UpdateCustomer";
import Customer from "../entity/Customer";




export default class UpdateCustomerRepository implements repository<UpdateCustomer, Customer> {
    
    async execute(props: UpdateCustomer): Promise<Customer> {
        const connection = await ConnectionSource.connect();

        const customer = await connection.getRepository(Customer).findOneBy({
            id: props.id ,
        });

        if (!customer) {
            throw new Error(`Customer with id ${props.id} not found`);
        }

        const {data} = props;

        if (data.firstName) {
            customer.firstName = data.firstName;
        }

        if (data.lastName) {
            customer.lastName = data.lastName;
        }

        if (data.email) {
            customer.email = data.email;
        }

        if (data.phone) {
            customer.phone = data.phone;
        }

        if (data.address) {
            customer.adress = data.address;
        }

        await connection.getRepository(Customer).save(customer);

        return customer;
    }
}