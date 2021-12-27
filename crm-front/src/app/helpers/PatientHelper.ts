import {PatientVO} from "../patients/vo/PatientVO";
import {PatientIdentityVO} from "../patients/vo/PatientIdentityVO";

export const patientFullName = (p: PatientVO): string => {
  return identityFullName(p.identity);
}

export const identityFullName = (i: PatientIdentityVO): string => {
  let firstName = i.firstName || ""
  let lastName = i.lastName || ""

  return firstName.concat(" ").concat(lastName);
}
