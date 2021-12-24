import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {patientService} from "../PatientService";
import {patientFullName} from "../../helpers/PatientHelper";
import {PatientView} from "../vo/PatientView";

export function usePatient(patientId?: string): [PatientView|undefined, string, string|null] {
  let [patient, setPatient] = useState<PatientView>();
  let [title, setTitle] = useState<string>("Patient is loading...");
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let id = patientId;
    let sub:Subscription;

    if(id) {
      sub = patientService.getById(id).subscribe({
        next: p => {
          setPatient(p)
          setTitle(patientFullName(p))
          setError(null)
        },
        error: err => {
          setError("I cannot load this patient. What a bummer..")
          setTitle("Oops")
          console.error(err)
        }
      });
    } else {
      setError("The patient's ID was not found, are you on the right path ?")
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [patientId])

  return [patient, title, error]
}