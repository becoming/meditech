import {Patient} from "../patients/vo/Patient";
import {PatientIdentity} from "../patients/vo/PatientIdentity";

export const fullNameP = (p: Patient): string => {
  return fullNameI(p.identity);
}

export const fullNameI = (i: PatientIdentity): string => {
  let firstName = i.firstName || ""
  let lastName = i.lastName || ""

  return firstName.concat(" ").concat(lastName);
}
