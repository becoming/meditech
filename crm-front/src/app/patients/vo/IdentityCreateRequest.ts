export interface IdentityCreateRequest {
  title: string
  firstName: string
  lastName: string
}

export const toNewIdentity = (title: string, firstname: string, lastname: string): IdentityCreateRequest => {
  return {
    title: title,
    firstName: firstname,
    lastName: lastname
  }
}
