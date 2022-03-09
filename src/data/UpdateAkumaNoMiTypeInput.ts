import { Field, InputType } from "type-graphql"
import { AkumaNoMiType } from "../entity/AkumaNoMiType"

@InputType()
export class UpdateAkumaNoMiTypeInput implements Partial<AkumaNoMiType> {
    @Field()
    id: number
    
    @Field()
    name?: string

    @Field()
    description?: string
}