import {IdentityVO, toIdentity} from "../../common/vo/identity/IdentityVO";
import {BasicVO} from "../../common/vo/BasicVO";
import {toDate2} from "../../common/helpers/DateHelper";
import {AddressVO, toAddresses} from "../../common/vo/address/AddressVO";

export interface DoctorVO extends BasicVO {
  identity: IdentityVO
  addresses: AddressVO[]
}

export const hasAddress = (vo: DoctorVO): boolean => {
  return vo.addresses && vo.addresses.length > 0
}

export const toDoctors = (is: any): DoctorVO[] => {
  let result: DoctorVO[] = []

  if (is && is.length && is.length > 0) {
    is.forEach((v: any) => result.push(toDoctor(v)))
  }

  return result;
}

export const toDoctor = (i: any): DoctorVO => {
  return {
    id: i.id,
    created: toDate2(i.created),
    updated: toDate2(i.updated),

    identity: toIdentity(i.identity),
    addresses: toAddresses(i.addresses)
  }
}
