import {httpHelper, httpHelperNoAuth} from "../common/helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {DoctorVO} from "./vo/DoctorVO";
import {NewIdentityRequest} from "../common/vo/identity/NewIdentityRequest";

export class DoctorService {

  create(identity?: NewIdentityRequest): ReplaySubject<DoctorVO> {
    return httpHelper.post(identity, "/v1/doctors")
  }

  findById(id?: string): ReplaySubject<DoctorVO> {
    return httpHelperNoAuth.get<DoctorVO>(`/v1/doctors/${id}`)
  }

  findAll(): ReplaySubject<DoctorVO[]> {
    return httpHelperNoAuth.get<DoctorVO[]>(`/v1/doctors`)
  }
}

export const doctorService: DoctorService = new DoctorService()
