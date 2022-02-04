import {httpHelper, httpHelperNoAuth} from "../helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {PatientAddressVO} from "./vo/PatientAddressVO";
import {AddressUpdateRequest} from "./vo/AddressUpdateRequest";
import {AddressRequest} from "./vo/AddressRequest";

export class AddressService {

  createForPatient(patientId: string, address: AddressRequest): ReplaySubject<PatientAddressVO> {
    return httpHelper.post(address, `/v1/patients/${patientId}/addresses`)
  }

  createForDoctor(doctorId: string, address: AddressRequest): ReplaySubject<PatientAddressVO> {
    return httpHelper.post(address, `/v1/doctors/${doctorId}/addresses`)
  }

  update(addressId: string, address: AddressUpdateRequest): ReplaySubject<PatientAddressVO> {
    return httpHelper.put(address, `/v1/addresses/${addressId}`)
  }

  getById(id: string): ReplaySubject<PatientAddressVO> {
    return httpHelperNoAuth.get<PatientAddressVO>(`/v1/addresses/${id}`)
  }
}

export const addressService: AddressService = new AddressService()
