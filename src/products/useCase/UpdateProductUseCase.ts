import useCase from "../../utils/infrastructure/useCase";
import UpdateProduct from "../domain/dto/updateProduct";
import Product from "../domain/entity/Product";
import UpdateProductRepository from "../domain/repository/UpdateProductRepository";


export default class UpdateProductUseCase implements useCase<UpdateProduct, Product> {

    protected updateProductRepository: UpdateProductRepository;

    constructor() {
        this.updateProductRepository = new UpdateProductRepository();
    }

    async execute(props: UpdateProduct): Promise<Product> {
        return await this.updateProductRepository.execute(props);
    }

}