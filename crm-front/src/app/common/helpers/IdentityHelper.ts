import {PatientVO} from "../../patients/vo/PatientVO";
import {IdentityVO} from "../vo/identity/IdentityVO";
import {DoctorVO} from "../../doctors/vo/DoctorVO";

export const patientFullName = (p: PatientVO): string => {
  return identityFullName(p.identity);
}

export const doctorFullName = (p: DoctorVO): string => {
  return identityFullName(p.identity);
}

export const identityFullName = (i: IdentityVO): string => {
  let firstName = i.firstName || ""
  let lastName = i.lastName || ""

  return firstName.concat(" ").concat(lastName);
}
