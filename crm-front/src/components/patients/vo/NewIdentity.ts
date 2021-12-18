export interface NewIdentity {
  title: string
  firstName: string
  lastName: string
}

export const newIdentity = (title: string, firstname: string, lastname: string): NewIdentity => {
  return {
    title: title,
    firstName: firstname,
    lastName: lastname
  }
}
