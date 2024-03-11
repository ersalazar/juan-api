import DeleteProductUseCase from "../useCase/DeleteProductUseCase";




export default class DeleteProductAdapter {
    protected deleteProductUseCase: any;

    constructor() {
        this.deleteProductUseCase = new DeleteProductUseCase();
    }

    async execute(id: string): Promise<void> {

        
        const result = await this.deleteProductUseCase.execute(id);
        return result;
    }
}