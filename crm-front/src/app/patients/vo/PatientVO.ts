import {PatientIdentityVO} from "./PatientIdentityVO";
import {PatientAddressVO} from "./PatientAddressVO";

export interface PatientVO {
  id: string

  identity: PatientIdentityVO
  addresses: PatientAddressVO[]
}
