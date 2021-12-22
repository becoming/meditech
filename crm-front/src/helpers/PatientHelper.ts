import {PatientView} from "../components/patients/vo/PatientView";
import {PatientIdentityView} from "../components/patients/vo/PatientIdentityView";

export const fullNameP = (p: PatientView): string => {
  return fullNameI(p.identity);
}

export const fullNameI = (i: PatientIdentityView): string => {
  let firstName = i.firstName || ""
  let lastName = i.lastName || ""

  return firstName.concat(" ").concat(lastName);
}
