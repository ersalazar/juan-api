import CustomerByIdUseCase from "../useCase/CustomerByIdUseCase";



export default class CustomerByIdAdapter {
    protected customerByIdUseCase: CustomerByIdUseCase;

    constructor() {
        this.customerByIdUseCase = new CustomerByIdUseCase();
    }

    async execute (id: number) {
        const result = await this.customerByIdUseCase.execute(id);
        return result;
    }
}