import { Arg, Mutation, Resolver } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { CreateAkumaNoMiTypeInput } from "../data/CreateAkumaNoMiTypeInput";
import { AkumaNoMiType } from "../entity/AkumaNoMiType";
import { AkumaNoMiTypeRepository } from "../repository/AkumaNoMiTypeRepository";

@Resolver((_type) => AkumaNoMiType)
export class CreateAkumaNoMiType {
    @Mutation((_type) => AkumaNoMiType)
    public async CreateAkumaNoMiType(
        @Arg("data") inputData: CreateAkumaNoMiTypeInput
    ): Promise<AkumaNoMiType> {
        const akumaNoMiTypeRepository = getCustomRepository(AkumaNoMiTypeRepository)
        const akumaNoMiType = akumaNoMiTypeRepository.create({
            name: inputData.name,
            description: inputData.description || ""
        })
        await akumaNoMiTypeRepository.save(akumaNoMiType)
        return akumaNoMiType
    }
}