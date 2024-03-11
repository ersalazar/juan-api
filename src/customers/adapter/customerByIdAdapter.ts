import CustomerByIdUseCase from "../useCase/CustomerByIdUseCase";



export default class CustomerByIdAdapter {
    protected customerByIdUseCase: CustomerByIdUseCase;

    constructor() {
        this.customerByIdUseCase = new CustomerByIdUseCase();
    }

    async execute (id: string) {
        const numberId = parseInt(id);
        const result = await this.customerByIdUseCase.execute(numberId);
        return result;
    }
}