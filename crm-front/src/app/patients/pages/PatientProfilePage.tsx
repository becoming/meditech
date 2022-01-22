import {PageTitle} from "../../PageTitle";
import {useParams} from "react-router-dom";
import {WarningMessage} from "../components/WarningMessage";
import {PatientWidgets} from "../components/PatientWidgets";
import {usePatient} from "../hooks/usePatient";

export function PatientProfilePage() {

  let params = useParams();
  let [patient, title, error] = usePatient(params.patientId);

  let content = <span/>;

  if (patient) {
    content = <PatientWidgets patient={patient}/>
  } else if (error) {
    content = <WarningMessage message={error} backUrl={"/patients"}/>
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <PageTitle value={title} backUrl={"/patients"}/>
      </div>
    </div>

    {content}

  </div>
}
