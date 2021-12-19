import {Patient} from "../patients/vo/Patient";

export const fullName = (p: Patient): string => {
  return p.identity.firstName.concat(" ").concat(p.identity.lastName);
}
