import {ProcedureRequest} from "./ProcedureRequest";

export interface ProcedureUpdateRequest extends ProcedureRequest{
  id: string
}


export const basicProcedureEditReq = (id: string): ProcedureUpdateRequest => {
  return {
    id: "",
    name: ""
  }
}
