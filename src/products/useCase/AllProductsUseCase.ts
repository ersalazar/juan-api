import useCase from "../../utils/infrastructure/useCase";
import Product from "../domain/entity/Product";
import AllProductsRepository from "../domain/repository/AllProductsRepository";



export default class AllProductsUseCase implements useCase<void, Product[]> {

    protected allProductsRepository: AllProductsRepository;

    constructor() {
        this.allProductsRepository = new AllProductsRepository();
    }

    async execute(): Promise<Product[]> {
        return await this.allProductsRepository.execute();
    }

}