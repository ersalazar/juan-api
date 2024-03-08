import useCase from "../../utils/infrastructure/useCase";
import DeleteCustomerRepository from "../domain/repository/DeleteCustomerRepository";



export default class DeleteCustomerUseCase implements useCase<number, void> {
    protected deleteCustomerRepository: DeleteCustomerRepository;

    constructor() {
        this.deleteCustomerRepository = new DeleteCustomerRepository();   
    }

    async execute(id: number): Promise<void> {
        await this.deleteCustomerRepository.execute(id);

        return
    }
}