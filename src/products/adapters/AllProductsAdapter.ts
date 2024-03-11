import Product from "../domain/entity/Product";
import AllProductsUseCase from "../useCase/AllProductsUseCase";



export default class AllProductsAdapter {
    protected allProductsUseCase: AllProductsUseCase;

    constructor() {
        this.allProductsUseCase = new AllProductsUseCase();
    }

    async execute(): Promise<Product[]> {
        const result = await this.allProductsUseCase.execute();
        return result;
    }
}