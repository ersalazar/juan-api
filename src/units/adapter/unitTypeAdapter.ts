import UnitTypes from "../domain/entity/UnitTypes";
import UnitTypeByIdUseCase from "../useCase/UnitTypeByIdUseCase";
import Joi from 'joi';

export default class unitTypeAdapter {

    protected unitTypeByIdUseCase: UnitTypeByIdUseCase;
 
    constructor() {
        this.unitTypeByIdUseCase = new UnitTypeByIdUseCase();
    }

     async execute(body:any ): Promise<UnitTypes> {

        const schema =  Joi.object({
            id: Joi.number().required()
        })

        const { error } = schema.validate(body);

        if (error) {
        console.error('Invalid ID:', error.details[0].message);
        } 
    
        const result  =  await this.unitTypeByIdUseCase.execute(body.id);
        return result;
    }

}