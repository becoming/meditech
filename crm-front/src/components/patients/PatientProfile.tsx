import {PageTitle} from "../PageTitle";
import {useEffect, useState} from "react";
import {patientService} from "./PatientService";
import {Patient} from "./vo/Patient";
import {useParams} from "react-router-dom";
import {ErrorMessage} from "./ErrorMessage";
import {fullNameP} from "../helper/PatientHelper";
import {PatientWidgets} from "./PatientWidgets";

export function PatientProfile(props: any) {

  let params = useParams();

  let [patient, setPatient] = useState<Patient>();
  let [title, setTitle] = useState<string>("Patient loading...");
  let [error, setError] = useState<string | null>(null);
  let content = <span />;

  useEffect(() => {
    let id = params.id;

    if(id) {
      patientService.getById(id).subscribe({
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
