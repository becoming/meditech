import {BasicVO} from "../../common/BasicVO";

export interface ProcedureVO extends BasicVO{
  id: string
  version: string
  name: string

  description?: string
  price?: string
  currency?: string
}
