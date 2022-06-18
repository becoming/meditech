import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {DoctorVO, toDoctor} from "../vo/DoctorVO";
import {doctorService} from "../DoctorsService";
import {doctorFullName} from "../../common/helpers/IdentityHelper";

export function useDoctor(doctorId?: string): [DoctorVO | undefined, string, string | null] {
  let [doctor, setDoctor] = useState<DoctorVO>();
  let [doctorName, setDoctorName] = useState<string>("");
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let id = doctorId;
    let sub: Subscription;

    if (id) {
      sub = doctorService.findById(id)
        .subscribe({
          next: p => {
            setDoctor(toDoctor(p))
            setDoctorName(doctorFullName(p))
            setError(null)
          },
          error: ignored => {
            setError("I cannot load this doctor. What a bummer..")
            setDoctorName("Oops")
          }
        });
    } else {
      setError("The doctor's ID was not found, are you on the right path ?")
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [doctorId])

  return [doctor, doctorName, error]
}
