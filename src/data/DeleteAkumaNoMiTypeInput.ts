import { Field, InputType } from "type-graphql"
import { AkumaNoMiType } from "../entity/AkumaNoMiType"

@InputType()
export class DeleteAkumaNoMiTypeInput implements Partial<AkumaNoMiType> {
    @Field()
    id: number
}