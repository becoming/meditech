import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {newIdentity} from "./vo/NewIdentityRequest";
import {ReplaySubject} from "rxjs";
import {PatientVO} from "./vo/PatientVO";
import {PatientIdentityVO} from "./vo/PatientIdentityVO";

export class PatientService {

  create(title: string, firstname: string, lastname: string): ReplaySubject<PatientVO> {
    return httpHelper.post(newIdentity(title, firstname, lastname), "/v1/patients")
  }

  getAll(): ReplaySubject<PatientVO[]> {
    return httpHelperNoAuth.get<PatientVO[]>('/v1/patients')
  }

  getById(id: string): ReplaySubject<PatientVO> {
    return httpHelperNoAuth.get<PatientVO>(`/v1/patients/${id}`)
  }

  getIdentityById(patientId: string, identityId: string): ReplaySubject<PatientIdentityVO> {
    return httpHelperNoAuth.get<PatientIdentityVO>(`/v1/patients/${patientId}/identity/${identityId}`)
  }

  updateIdentity(p: PatientIdentityVO, patientId?: string): ReplaySubject<PatientIdentityVO> {
    return httpHelper.put(p, `/v1/patients/${patientId}/identity/${p.id}`)
  }

}

export const patientService: PatientService = new PatientService()
