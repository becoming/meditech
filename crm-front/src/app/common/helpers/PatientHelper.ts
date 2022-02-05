import {PatientVO} from "../../patients/vo/PatientVO";
import {IdentityVO} from "../vo/identity/IdentityVO";

export const patientFullName = (p: PatientVO): string => {
  return identityFullName(p.identity);
}

export const identityFullName = (i: IdentityVO): string => {
  let firstName = i.firstName || ""
  let lastName = i.lastName || ""

  return firstName.concat(" ").concat(lastName);
}
