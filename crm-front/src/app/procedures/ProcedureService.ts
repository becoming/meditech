import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {ProcedureRequest} from "./vo/ProcedureRequest";
import {ProcedureVO} from "./vo/ProcedureVO";
import {ProcedureUpdateRequest} from "./vo/ProcedureUpdateRequest";

export class ProcedureService {

  create(address: ProcedureRequest): ReplaySubject<ProcedureVO> {
    return httpHelper.post(address, "/v1/addresses")
  }

  update(update: ProcedureUpdateRequest): ReplaySubject<ProcedureVO> {
    return httpHelper.put(update, `/v1/addresses/${update.id}`)
  }

  getById(id: string): ReplaySubject<ProcedureVO> {
    return httpHelperNoAuth.get<ProcedureVO>(`/v1/procedures/${id}`)
  }
}

export const procedureService: ProcedureService = new ProcedureService()
