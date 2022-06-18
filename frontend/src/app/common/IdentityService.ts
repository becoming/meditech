import {httpHelper, httpHelperNoAuth} from "./helpers/http/HttpHelper";
import {ReplaySubject} from "rxjs";
import {IdentityUpdateRequest} from "./vo/identity/IdentityUpdateRequest";
import {IdentityVO} from "./vo/identity/IdentityVO";

export class IdentityService {

  findById(identityId: string): ReplaySubject<IdentityVO> {
    return httpHelperNoAuth.get<IdentityVO>(`/v1/identities/${identityId}`)
  }

  update(update: IdentityUpdateRequest): ReplaySubject<IdentityVO> {
    return httpHelper.put(update, `/v1/identities/${update.id}`)
  }

}

export const identityService: IdentityService = new IdentityService()
