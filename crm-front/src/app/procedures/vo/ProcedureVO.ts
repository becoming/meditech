import {BasicVO} from "../../common/vo/BasicVO";
import {toDate2} from "../../helpers/DateHelper";

export interface ProcedureVO extends BasicVO{
  id: string
  version: string
  versionDate: Date
  name: string

  description?: string
  price?: string
  currency?: string
}

export const toProcedures = (is: any[]) => {
  let result : ProcedureVO[] = []
  is.forEach(v => result.push(toProcedure(v)))

  return result;
}

export const toProcedure = (i: any): ProcedureVO => {
  return {
    id: i.id,
    created: toDate2(i.created),
    updated: toDate2(i.updated),

    currency: i.currency,
    description: i.description,
    name: i.name,
    price: i.price,
    version: i.version,
    versionDate: toDate2(i.versionDate),
  }
}
