import {BasicVO} from "./BasicVO";
import {toDate, toDate2} from "../../helpers/DateHelper";

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
    created: i.created,
    updated: i.updated,

    medicalId: i.medicalId,
    nationalId: i.nationalId,

    firstName: i.firstName,
    lastName: i.lastName,

    birthDate: i.birthDate,
    deathDate: i.deathDate,
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
