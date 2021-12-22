import {PatientAddressView} from "../patients/vo/PatientAddressView";

export const toLuxFormat = (a: PatientAddressView): string => {
  if(!a) {
    return "[no address]";
  }

  return a.number.concat(" ").concat(a.street).concat(", ")
    .concat(a.zipCode).concat(", ").concat(a.city).concat(", ")
    .concat(a.country);
}
