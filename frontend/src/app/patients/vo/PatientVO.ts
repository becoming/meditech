import {AddressVO, toAddresses} from "../../common/vo/address/AddressVO";
import {BasicVO} from "../../common/vo/BasicVO";
import {toDate2} from "../../common/helpers/DateHelper";
import {IdentityVO, toIdentity} from "../../common/vo/identity/IdentityVO";

export interface PatientVO extends BasicVO {
  identity: IdentityVO
  addresses: AddressVO[]
}

export const hasAddress = (patient: PatientVO): boolean => {
  return patient.addresses && patient.addresses.length > 0
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
