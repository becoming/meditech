import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {newIdentity} from "./vo/NewIdentityRequest";
import {ReplaySubject} from "rxjs";
import {PatientView} from "./vo/PatientView";
import {PatientIdentityVO} from "./vo/PatientIdentityVO";

export class PatientService {

  create(title: string, firstname: string, lastname: string): ReplaySubject<PatientView> {
    return httpHelper.post(newIdentity(title, firstname, lastname), "/v1/patients")
  }

  getAll(): ReplaySubject<PatientView[]> {
    return httpHelperNoAuth.get<PatientView[]>('/v1/patients')
  }

  getById(id: string): ReplaySubject<PatientView> {
    return httpHelperNoAuth.get<PatientView>(`/v1/patients/${id}`)
  }

  getIdentityById(patientId: string, identityId: string): ReplaySubject<PatientIdentityVO> {
    return httpHelperNoAuth.get<PatientIdentityVO>(`/v1/patients/${patientId}/identity/${identityId}`)
  }

  updateIdentity(p: PatientIdentityVO, patientId?: string): ReplaySubject<PatientIdentityVO> {
    return httpHelper.put(p, `/v1/patients/${patientId}/identity/${p.id}`)
  }

}

export const patientService: PatientService = new PatientService()
