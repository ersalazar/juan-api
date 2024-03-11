import DeleteCustomerUseCase from "../useCase/DeleteCustomerUseCase";



export default class DeleteCustomerAdapter {
    protected deleteCustomerUseCase: any;

    constructor() {
        this.deleteCustomerUseCase = new DeleteCustomerUseCase();
    }

    async execute(id: string): Promise<void> {

        const numberId = parseInt(id);
        const result = await this.deleteCustomerUseCase.execute(numberId);
        return result;
    }
}