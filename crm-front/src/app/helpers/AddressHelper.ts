import {PatientAddressVO} from "../patients/vo/PatientAddressVO";

export const toLuxFormat = (a: PatientAddressVO): string => {
  if(!a) {
    return "[no address]";
  }

  return a.number.concat(" ").concat(a.street).concat(", ")
    .concat(a.zipCode).concat(", ").concat(a.city).concat(", ")
    .concat(a.country);
}
