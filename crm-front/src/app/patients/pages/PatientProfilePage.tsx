import {useParams} from "react-router-dom";
import {WarningMessage} from "../components/WarningMessage";
import {PatientWidgets} from "../components/PatientWidgets";
import {usePatient} from "../hooks/usePatient";
import {PatientProfileToolbar} from "../components/PatientProfileToolbar";

export function PatientProfilePage() {

  let params = useParams();
  let [patient, title, error] = usePatient(params.patientId);
  let patientId = params.patientId || ""

  let content = <span/>;

  if (patient) {
    content = <PatientWidgets patient={patient}/>
  } else if (error) {
    content = <WarningMessage message={error} backUrl={"/patients"}/>
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <PatientProfileToolbar title={title} patientId={patientId}/>
      </div>
    </div>

    {content}

  </div>
}
