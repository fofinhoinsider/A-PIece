import { Arg, Mutation, Resolver } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { UpdateAkumaNoMiTypeInput } from "../data/UpdateAkumaNoMiTypeInput";
import { AkumaNoMiType } from "../entity/AkumaNoMiType";
import { AkumaNoMiTypeRepository } from "../repository/AkumaNoMiTypeRepository";

@Resolver((_type) => AkumaNoMiType)
export class UpdateAkumaNoMiType {
    @Mutation((_type) => AkumaNoMiType)
    public async UpdateAkumaNoMiType(
        @Arg("data") inputData: UpdateAkumaNoMiTypeInput
    ): Promise<AkumaNoMiType> {
        const akumaNoMiTypeRepository = getCustomRepository(AkumaNoMiTypeRepository)
        const akumaNoMiType = await akumaNoMiTypeRepository.findOneOrFail({
            id: inputData.id
        })
        if(inputData.name)
            akumaNoMiType.name = inputData.name
        if(inputData.description)
            akumaNoMiType.description = inputData.description
        return akumaNoMiTypeRepository.save(akumaNoMiType)
    }
}