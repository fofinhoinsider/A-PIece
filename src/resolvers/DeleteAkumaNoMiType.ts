import { Arg, Mutation, Resolver } from "type-graphql";
import { DeleteResult, getCustomRepository } from "typeorm";
import { UpdateAkumaNoMiTypeInput } from "../data/UpdateAkumaNoMiTypeInput";
import { AkumaNoMiType } from "../entity/AkumaNoMiType";
import { AkumaNoMiTypeRepository } from "../repository/AkumaNoMiTypeRepository";

@Resolver((_type) => DeleteResult)
export class DeleteAkumaNoMiType {
    @Mutation((_type) => AkumaNoMiType)
    public async DeleteAkumaNoMiType(
        @Arg("data") inputData: UpdateAkumaNoMiTypeInput
    ): Promise<DeleteResult> {
        const akumaNoMiTypeRepository = getCustomRepository(AkumaNoMiTypeRepository)
            return akumaNoMiTypeRepository.delete({
                id: inputData.id
            })
    }
}