import useCase from "../../utils/infrastructure/useCase";
import UnitTypes from "../domain/entity/UnitTypes";
import UnitTypeByIdRepository from "../domain/repository/UnitTypeByIdRepository";

export default class UnitTypeByIdUseCase implements useCase<number, UnitTypes>{
    protected unitTypeByIdRepository: UnitTypeByIdRepository;

    constructor( ) {
        this.unitTypeByIdRepository = new UnitTypeByIdRepository();
    }
    async execute(id: number): Promise<UnitTypes> {
        const newId =  id +1 ;
        const unitType = await this.unitTypeByIdRepository.execute(newId);   
        return unitType;
    }
  
}