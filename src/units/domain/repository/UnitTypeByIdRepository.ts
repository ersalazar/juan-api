import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import UnitTypes from "../entity/UnitTypes";

export default class UnitTypeByIdRepository implements repository<number,UnitTypes> {
    private connection: ConnectionSource;
    constructor() {
        this.connection = this.connection ;
    }
    async execute(id:number): Promise<UnitTypes>{
        const connection = await ConnectionSource.connect();
        const unitType = await connection.getRepository(UnitTypes).findOneBy({
            id,
        });
    
        if(!unitType) {
            throw new Error("Unit Type not found");
        }
   
        return unitType;
    }
}