import {AddressRequest} from "./AddressRequest";

export interface AddressCreateRequest extends AddressRequest{
  patientId: string
}
