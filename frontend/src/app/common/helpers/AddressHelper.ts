import {AddressVO} from "../vo/address/AddressVO";

export const toLuxFormat = (a: AddressVO): string => {
  if (!a) {
    return "[no address]";
  }

  return a.number.concat(" ").concat(a.street).concat(", ")
    .concat(a.zipCode).concat(" ")
    .concat(a.city).concat(", ")
    .concat(a.country);
}
