import {PatientAddress} from "../patients/vo/PatientAddress";

export const toLuxFormat = (a: PatientAddress): string => {
  if(!a) {
    return "[no address]";
  }

  return a.number.concat(" ").concat(a.street).concat(", ")
    .concat(a.zipCode).concat(", ").concat(a.city).concat(", ")
    .concat(a.country);
}
