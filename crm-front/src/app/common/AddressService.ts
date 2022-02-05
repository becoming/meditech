import {httpHelper, httpHelperNoAuth} from "./helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {AddressVO} from "./vo/address/AddressVO";
import {AddressUpdateRequest} from "./vo/address/AddressUpdateRequest";
import {AddressRequest} from "./vo/address/AddressRequest";

export class AddressService {

  createForPatient(patientId?: string, address?: AddressRequest): ReplaySubject<AddressVO> {
    return httpHelper.post(address, `/v1/patients/${patientId}/addresses`)
  }

  createForDoctor(doctorId?: string, address?: AddressRequest): ReplaySubject<AddressVO> {
    return httpHelper.post(address, `/v1/doctors/${doctorId}/addresses`)
  }

  update(addressId?: string, address?: AddressUpdateRequest): ReplaySubject<AddressVO> {
    return httpHelper.put(address, `/v1/addresses/${addressId}`)
  }

  getById(id?: string): ReplaySubject<AddressVO> {
    return httpHelperNoAuth.get<AddressVO>(`/v1/addresses/${id}`)
  }
}

export const addressService: AddressService = new AddressService()
