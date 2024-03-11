import useCase from "../../utils/infrastructure/useCase";
import Product from "../domain/entity/Product";
import ProductByIdRepository from "../domain/repository/ProductByIdRepository";



export default class ProductByIdUseCase implements useCase<number, Product> {

    protected productByIdRepository: ProductByIdRepository;

    constructor() {
        this.productByIdRepository = new ProductByIdRepository();
    }

    async execute(id: number): Promise<Product> {
        return await this.productByIdRepository.execute(id);
    }

}