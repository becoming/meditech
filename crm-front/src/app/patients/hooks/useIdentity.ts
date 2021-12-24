import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {patientService} from "../PatientService";
import {identityFullName} from "../../helpers/PatientHelper";
import {PatientIdentityVO} from "../vo/PatientIdentityVO";

export function usePatientIdentity(patientId?: string, identityId?: string): [PatientIdentityVO|undefined, string, string|null] {
  let [identity, setIdentity] = useState<PatientIdentityVO>();
  let [title, setTitle] = useState<string>("Identity is loading...");
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let sub:Subscription;

    if(patientId && identityId) {
      sub = patientService.getIdentityById(patientId, identityId).subscribe({
        next: p => {
          setIdentity(p)
          setTitle("Edit " + identityFullName(p) + "'s identity")
          setError(null)
        },
        error: err => {
          setError("I cannot load this patient's identity. What a bummer..")
          setTitle("Oops")
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

  return [identity, title, error]
}
