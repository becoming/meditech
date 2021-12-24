export interface PatientIdentityVO {
  id: string
  updated: string
  created: string

  medicalId?: string
  nationalId?: string

  firstName?: string
  lastName?: string

  birthDate?: string
  deathDate?: string
}

export const cloneIdentity = (i: PatientIdentityVO): PatientIdentityVO => {
  return {
    id: i.id,
    firstName: i.firstName,
    lastName: i.lastName,
    deathDate: i.deathDate,
    birthDate: i.birthDate,
    created: i.created,
    updated: i.updated,
    medicalId: i.medicalId,
    nationalId: i.nationalId,
  }
}
