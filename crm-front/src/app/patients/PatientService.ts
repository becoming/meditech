import {httpHelper, httpHelperNoAuth} from "../common/helpers/http/HttpHelper";
import {NewIdentityRequest} from "../common/vo/identity/NewIdentityRequest";
import {ReplaySubject} from "rxjs";
import {PatientVO} from "./vo/PatientVO";
import {IdentityVO} from "../common/vo/identity/IdentityVO";

export class PatientService {

  create(identity: NewIdentityRequest): ReplaySubject<PatientVO> {
    return httpHelper.post(identity, "/v1/patients")
  }

  findAll(): ReplaySubject<PatientVO[]> {
    return httpHelperNoAuth.get<PatientVO[]>('/v1/patients')
  }

  getById(id: string): ReplaySubject<PatientVO> {
    return httpHelperNoAuth.get<PatientVO>(`/v1/patients/${id}`)
  }

  getIdentityById(patientId: string, identityId: string): ReplaySubject<IdentityVO> {
    return httpHelperNoAuth.get<IdentityVO>(`/v1/patients/${patientId}/identity/${identityId}`)
  }

}

export const patientService: PatientService = new PatientService()
