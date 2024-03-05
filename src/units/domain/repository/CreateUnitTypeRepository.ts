import ConnectionSource from "../../../utils/database/connection";
import repository from "../../../utils/infrastructure/repository";
import unitNew from "../dto/unitNew";
import UnitTypes from "../entity/UnitTypes";

export default class CreateUnitTypeRepository implements repository<unitNew,UnitTypes> {
    async execute(data: unitNew): Promise<UnitTypes> {
        const connection = await ConnectionSource.connect();


        const newInfo = await connection.getRepository(UnitTypes).create(data);
        return newInfo;
    }
}