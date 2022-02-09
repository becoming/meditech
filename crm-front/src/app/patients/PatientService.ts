import {httpHelper, httpHelperNoAuth} from "../common/helpers/http/HttpHelper";
import {NewIdentityRequest} from "../common/vo/identity/NewIdentityRequest";
import {ReplaySubject} from "rxjs";
import {PatientVO} from "./vo/PatientVO";

export class PatientService {

  create(identity: NewIdentityRequest): ReplaySubject<PatientVO> {
    return httpHelper.post(identity, "/v1/patients")
  }

  findAll(): ReplaySubject<PatientVO[]> {
    return httpHelperNoAuth.get<PatientVO[]>('/v1/patients')
  }

  findById(id: string): ReplaySubject<PatientVO> {
    return httpHelperNoAuth.get<PatientVO>(`/v1/patients/${id}`)
  }

}

export const patientService: PatientService = new PatientService()
