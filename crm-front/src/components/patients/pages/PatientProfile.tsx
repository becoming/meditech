import {PageTitle} from "../../PageTitle";
import {useEffect, useState} from "react";
import {patientService} from "../PatientService";
import {Patient} from "../vo/Patient";
import {useParams} from "react-router-dom";
import {ErrorMessage} from "../components/ErrorMessage";
import {fullNameP} from "../../helper/PatientHelper";
import {PatientWidgets} from "../components/PatientWidgets";
import {Subscription} from "rxjs";

export function PatientProfile() {

  let params = useParams();

  let [patient, setPatient] = useState<Patient>();
  let [title, setTitle] = useState<string>("Patient is loading...");
  let [error, setError] = useState<string | null>(null);
  let content = <span />;

  useEffect(() => {
    let id = params.id;
    let sub:Subscription;

    if(id) {
      sub = patientService.getById(id).subscribe({
        next: p => {
          setPatient(p)
          setTitle(fullNameP(p))
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
    }, [params.id])

  if(error) {
    content = <ErrorMessage message={error} backUrl={"/patients"} />
  } else if(patient) {
    content = <PatientWidgets patient={patient} />
  } else {
  //  just default behaviour with loading and things
  }

  return <div className={"App-page-container"}>
    <PageTitle value={title} backUrl={"/patients"} />
    {content}
  </div>
}
