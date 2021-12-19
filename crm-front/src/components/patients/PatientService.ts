import {httpHelper, httpHelperNoAuth} from "../helper/http/HttpHelper";
import {newIdentity} from "./vo/NewIdentity";
import {ReplaySubject} from "rxjs";
import {Patient} from "./vo/Patient";

export class PatientService {

  create(title: string, firstname: string, lastname: string): ReplaySubject<Patient> {
    return httpHelper.post(newIdentity(title, firstname, lastname), "/v1/patients")
  }

  getAll() {
    return httpHelperNoAuth.get<Patient[]>('/v1/patients')
  }

  getById(id: string) {
    return httpHelperNoAuth.get<Patient>(`/v1/patients/${id}`)
  }

}

export const patientService: PatientService = new PatientService()
