export interface PatientIdentityView {
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
