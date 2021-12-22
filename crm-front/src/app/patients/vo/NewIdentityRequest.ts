export interface NewIdentityRequest {
  title: string
  firstName: string
  lastName: string
}

export const newIdentity = (title: string, firstname: string, lastname: string): NewIdentityRequest => {
  return {
    title: title,
    firstName: firstname,
    lastName: lastname
  }
}
