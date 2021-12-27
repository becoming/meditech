export interface NewIdentityRequest {
  title: string
  firstName: string
  lastName: string
}

export const toNewIdentity = (title: string, firstname: string, lastname: string): NewIdentityRequest => {
  return {
    title: title,
    firstName: firstname,
    lastName: lastname
  }
}
