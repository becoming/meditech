import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {PatientAddressVO} from "./vo/PatientAddressVO";
import {AddressCreateRequest} from "./vo/AddressCreateRequest";
import {AddressUpdateRequest} from "./vo/AddressUpdateRequest";

export class AddressService {

  create(address: AddressCreateRequest): ReplaySubject<PatientAddressVO> {
    return httpHelper.post(address, "/v1/addresses")
  }

  update(addressId: string, address: AddressUpdateRequest): ReplaySubject<PatientAddressVO> {
    return httpHelper.put(address, `/v1/addresses/${addressId}`)
  }

  getById(id: string): ReplaySubject<PatientAddressVO> {
    return httpHelperNoAuth.get<PatientAddressVO>(`/v1/addresses/${id}`)
  }
}

export const addressService: AddressService = new AddressService()
