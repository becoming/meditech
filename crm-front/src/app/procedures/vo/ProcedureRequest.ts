export interface ProcedureRequest {
  name: string
  description?: string
  price?: string
  currency?: string
}

export const basicProcedureReq = (): ProcedureRequest => {
  return {
    name: ""
  }
}
