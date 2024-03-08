import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import Customer from "../entity/Customer";




export default class DeleteCustomerRepository implements repository<number, void> {

    async execute(id: number) : Promise<void> {

        const connection = await ConnectionSource.connect();

        const {raw, affected} = await connection.getRepository(Customer).delete({
            id, 
        })

        if (affected === 0) {
            console.log(raw);
            throw new Error(`Could not delete Customer with id ${id} (not found or already deleted)`);
        }

        return;


    }
}