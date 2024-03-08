import AllCustomerUseCase from "../useCase/AllCutomersUseCase";




export default class AllCustomersAdapter {
    protected allCustomersUseCase: AllCustomerUseCase;

    constructor() {
        this.allCustomersUseCase = new AllCustomerUseCase();
    }

    async execute() {
        const result = await this.allCustomersUseCase.execute();
        return result;
    }
}