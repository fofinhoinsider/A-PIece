import { EntityRepository, Repository } from "typeorm";
import { AkumaNoMiType } from "../entity/AkumaNoMiType";

@EntityRepository(AkumaNoMiType)
export class AkumaNoMiTypeRepository extends Repository<AkumaNoMiType> {}