import {PatientIdentityView} from "./PatientIdentityView";
import {PatientAddressView} from "./PatientAddressView";

export interface PatientView {
  id: string

  identity: PatientIdentityView
  addresses: PatientAddressView[]
}
