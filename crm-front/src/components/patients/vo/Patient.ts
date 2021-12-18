import {PatientIdentity} from "./PatientIdentity";
import {PatientAddress} from "./PatientAddress";

export interface Patient {
  id: string

  identity: PatientIdentity
  addresses: PatientAddress[]
}
