import {PatientAddress} from "../patients/vo/PatientAddress";

export const toLuxFormat = (a: PatientAddress): string => {
  return a.number.concat(" ").concat(a.street).concat(", ")
    .concat(a.zipCode).concat(", ").concat(a.city).concat(", ")
    .concat(a.country);
}
