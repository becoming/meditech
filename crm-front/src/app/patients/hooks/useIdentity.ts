import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {patientService} from "../PatientService";
import {identityFullName} from "../../helpers/PatientHelper";
import {PatientIdentityVO, toIdentity} from "../vo/PatientIdentityVO";

export function usePatientIdentity(patientId?: string, identityId?: string): [PatientIdentityVO|undefined, string, string|null] {
  let [identity, setIdentity] = useState<PatientIdentityVO>();
  let [identityName, setIdentityName] = useState<string>("Identity is loading...");
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
        error: err => {
          setError("I cannot load this patient's identity. What a bummer..")
          setIdentityName("Oops")
          console.error(err)
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
