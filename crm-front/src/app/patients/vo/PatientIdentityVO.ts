import {BasicVO} from "../../common/BasicVO";
import {cloneDate, cloneDate2, toDate, toDate2} from "../../helpers/DateHelper";

export interface PatientIdentityVO extends BasicVO{

  medicalId?: string
  nationalId?: string

  firstName?: string
  lastName?: string

  birthDate?: Date
  deathDate?: Date
}

export const cloneIdentity = (i: PatientIdentityVO): PatientIdentityVO => {
  return {
    id: i.id,
    created: cloneDate2(i.created),
    updated: cloneDate2(i.created),

    medicalId: i.medicalId,
    nationalId: i.nationalId,

    firstName: i.firstName,
    lastName: i.lastName,

    birthDate: cloneDate(i.birthDate),
    deathDate: cloneDate(i.deathDate),
  }
}

export const toIdentity = (i: any): PatientIdentityVO => {
  return {
    id: i.id,
    created: toDate2(i.created),
    updated: toDate2(i.updated),

    medicalId: i.medicalId,
    nationalId: i.nationalId,

    firstName: i.firstName,
    lastName: i.lastName,

    birthDate: toDate(i.birthDate),
    deathDate: toDate(i.deathDate),
  }
}
