import {PatientIdentityVO} from "./PatientIdentityVO";
import {PatientAddressView} from "./PatientAddressView";

export interface PatientView {
  id: string

  identity: PatientIdentityVO
  addresses: PatientAddressView[]
}
