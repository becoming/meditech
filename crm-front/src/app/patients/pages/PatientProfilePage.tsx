import {useParams} from "react-router-dom";
import {WarningMessage} from "../../common/components/WarningMessage";
import {PatientWidgets} from "../components/profile/PatientWidgets";
import {usePatient} from "../hooks/usePatient";
import {PatientProfileToolbar} from "../components/profile/PatientProfileToolbar";

export function PatientProfilePage() {

  let params = useParams();
  let [patient, patientName, error] = usePatient(params.patientId);
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
        <PatientProfileToolbar title={patientName} patientId={patientId}/>
      </div>
    </div>

    {content}

  </div>
}
