import {BasicVO} from "../../common/vo/BasicVO";
import {toDate2} from "../../helpers/DateHelper";

export interface PatientAddressVO extends BasicVO {
  number: string
  street: string
  zipCode: string
  city: string
  region: string
  department: string
  country: string
}

export const toAddresses = (is: any[]) => {
  let result : PatientAddressVO[] = []
  is.forEach(v => result.push(toAddress(v)))

  return result;
}

export const toAddress = (i: any): PatientAddressVO => {
  return {
    id: i.id,
    created: toDate2(i.created),
    updated: toDate2(i.updated),

    city: i.city,
    country: i.country,
    department: i.department,
    number: i.number,
    region: i.region,
    street: i.street,
    zipCode:i.zipCode
  }
}
