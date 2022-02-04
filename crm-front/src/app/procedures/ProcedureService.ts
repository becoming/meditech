import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {ProcedureRequest} from "./vo/ProcedureRequest";
import {ProcedureVO} from "./vo/ProcedureVO";
import {ProcedureUpdateRequest} from "./vo/ProcedureUpdateRequest";

export class ProcedureService {

  create(procedure?: ProcedureRequest): ReplaySubject<ProcedureVO> {
    return httpHelper.post(procedure, "/v1/procedures")
  }

  update(procedureId?: string, update?: ProcedureUpdateRequest): ReplaySubject<ProcedureVO> {
    return httpHelper.put(update, `/v1/procedure/${procedureId}`)
  }

  getById(id?: string): ReplaySubject<ProcedureVO> {
    return httpHelperNoAuth.get<ProcedureVO>(`/v1/procedures/${id}`)
  }
}

export const procedureService: ProcedureService = new ProcedureService()
