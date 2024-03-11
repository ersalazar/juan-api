
import Product from "../domain/entity/Product";
import ProductByIdUseCase from "../useCase/ProductByIdUseCase";



export default class ProductByIdAdapter {

    protected productByIdUseCase: ProductByIdUseCase;

    constructor() {
        this.productByIdUseCase = new ProductByIdUseCase();
    }

    async execute(id: string): Promise<Product> {
        const numberId = parseInt(id);
        const result = await this.productByIdUseCase.execute(numberId);
        return result;
    }
}