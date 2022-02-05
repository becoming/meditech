import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {patientService} from "../PatientService";
import {identityFullName} from "../../common/helpers/PatientHelper";
import {IdentityVO, toIdentity} from "../../common/vo/identity/IdentityVO";

export function usePatientIdentity(patientId?: string, identityId?: string): [IdentityVO|undefined, string, string|null] {
  let [identity, setIdentity] = useState<IdentityVO>();
  let [identityName, setIdentityName] = useState<string>("");
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let sub:Subscription;

    if(patientId && identityId) {
      sub = patientService.getIdentityById(patientId, identityId).subscribe({
        next: p => {
          setIdentity(toIdentity(p))
          setIdentityName(identityFullName(p))
          setError(null)
        },
        error: () => {
          setError("I cannot load this patient's identity. What a bummer..")
          setIdentityName("Oops")
        }
      });
    } else {
      setError("The patient's ID or the identity ID was not found, are you on the right path ?")
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [patientId])

  return [identity, identityName, error]
}
