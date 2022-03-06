import { Query, Resolver } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { AkumaNoMiType } from "../entity/AkumaNoMiType";
import { AkumaNoMiTypeRepository } from "../repository/AkumaNoMiTypeRepository";

@Resolver((_type) => AkumaNoMiType)
export class GetAkumaNoMiTypes {
    @Query((_type) => [AkumaNoMiType])
    public async getAkumaNoMiTypes(): Promise<AkumaNoMiType[]> {
        const akumaNoMiTypeRepository = getCustomRepository(AkumaNoMiTypeRepository)
        const akumaNoMiTypes = await akumaNoMiTypeRepository.find()
        return akumaNoMiTypes
    }
}