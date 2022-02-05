export interface IdentityUpdateRequest {

  id: string

  medicalId?: string
  nationalId?: string

  firstName?: string
  lastName?: string

  birthDate?: Date
  deathDate?: Date
}
