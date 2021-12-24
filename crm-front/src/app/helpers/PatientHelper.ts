import {PatientView} from "../patients/vo/PatientView";
import {PatientIdentityVO} from "../patients/vo/PatientIdentityVO";

export const patientFullName = (p: PatientView): string => {
  return identityFullName(p.identity);
}

export const identityFullName = (i: PatientIdentityVO): string => {
  let firstName = i.firstName || ""
  let lastName = i.lastName || ""

  return firstName.concat(" ").concat(lastName);
}
