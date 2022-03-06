import { Field, InputType } from "type-graphql";
import { AkumaNoMiType } from "../entity/AkumaNoMiType";

@InputType()
export class CreateAkumaNoMiTypeInput implements Partial<AkumaNoMiType> {
    @Field()
    name: string

    @Field()
    description?: string
}