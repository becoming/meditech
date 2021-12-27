import {PatientIdentityVO, toIdentity} from "./PatientIdentityVO";
import {PatientAddressVO, toAddresses} from "./PatientAddressVO";
import {BasicVO} from "./BasicVO";
import {toDate2} from "../../helpers/DateHelper";

export interface PatientVO extends BasicVO {
  identity: PatientIdentityVO
  addresses: PatientAddressVO[]
}

export const toPatients = (is: any): PatientVO[] => {
  let result: PatientVO[] = []

  if (is && is.length && is.length > 0) {
    is.forEach((v: any) => result.push(toPatient(v)))
  }

  return result;
}

export const toPatient = (i: any): PatientVO => {
  return {
    id: i.id,
    created: toDate2(i.created),
    updated: toDate2(i.updated),

    identity: toIdentity(i.identity),
    addresses: toAddresses(i.addresses)
  }
}
