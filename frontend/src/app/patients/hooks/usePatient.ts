import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {patientService} from "../PatientService";
import {patientFullName} from "../../common/helpers/IdentityHelper";
import {PatientVO, toPatient} from "../vo/PatientVO";

export function usePatient(patientId?: string): [PatientVO | undefined, string, string | null] {
  let [patient, setPatient] = useState<PatientVO>();
  let [patientName, setPatientName] = useState<string>("");
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let id = patientId;
    let sub: Subscription;

    if (id) {
      sub = patientService.findById(id)
        .subscribe({
          next: (p: any) => {
            setPatient(toPatient(p))
            setPatientName(patientFullName(p))
            setError(null)
          },
          error: () => {
            setError("I cannot load this patient. What a bummer..")
            setPatientName("Oops")
          }
        });
    } else {
      setError("The patient's ID was not found, are you on the right path ?")
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [patientId])

  return [patient, patientName, error]
}
