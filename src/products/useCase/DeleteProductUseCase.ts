import useCase from "../../utils/infrastructure/useCase";
import DeleteProductRepository from "../domain/repository/DeleteProductRepository";



export default class DeleteProductUseCase implements useCase<number, void> {
    
        protected deleteProductRepository: DeleteProductRepository;
    
        constructor() {
            this.deleteProductRepository = new DeleteProductRepository();
        }
    
        async execute(id: number): Promise<void> {
            return await this.deleteProductRepository.execute(id);
        }
}

