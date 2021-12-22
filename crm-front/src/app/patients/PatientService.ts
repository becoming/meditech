import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {newIdentity} from "./vo/NewIdentityRequest";
import {ReplaySubject} from "rxjs";
import {PatientView} from "./vo/PatientView";

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

}

export const patientService: PatientService = new PatientService()
