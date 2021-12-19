import {PageTitle} from "../PageTitle";
import {useEffect, useState} from "react";
import {patientService} from "./PatientService";
import {Patient} from "./vo/Patient";
import {useParams} from "react-router-dom";
import {ErrorMessage} from "./ErrorMessage";
import {fullName} from "../helper/PatientHelper";

export function PatientProfile(props: any) {

  let params = useParams();
  console.log(params)
  console.log(props)

  let [patient, setPatient] = useState<Patient>();
  let [title, setTitle] = useState<string>("Patient loading...");
  let [error, setError] = useState<string | null>(null);
  let errorWidget = <span />;

  useEffect(() => {
    let id = params.id;

    if(id) {
      patientService.getById(id).subscribe({
        next: p => {
          setPatient(p)
          setTitle(fullName(p))
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
    }, [])

  if(error) {
    errorWidget = <ErrorMessage message={error} backUrl={"/patients"} />
  }

  return <div className={"App-page-container"}>
    <PageTitle value={title} backUrl={"/patients"} />
    {errorWidget}



  </div>
}
