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


        if (props.firstName) {
            customer.firstName = props.firstName;
        }

        if (props.lastName) {
            customer.lastName = props.lastName;
        }

        if (props.email) {
            customer.email = props.email;
        }

        if (props.phone) {
            customer.phone = props.phone;
        }

        if (props.address) {
            customer.address = props.address;
        }

        await connection.getRepository(Customer).save(customer);

        return customer;
    }
}