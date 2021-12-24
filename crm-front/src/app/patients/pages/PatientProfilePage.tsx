import {PageTitle} from "../../PageTitle";
import {useParams} from "react-router-dom";
import {ErrorMessage} from "../components/ErrorMessage";
import {PatientWidgets} from "../components/PatientWidgets";
import {usePatient} from "../hooks/usePatient";

export function PatientProfilePage() {

  let params = useParams();
  let [patient, title, error] = usePatient(params.id);

  let content = <span />;

  if(patient) {
    content = <PatientWidgets patient={patient} />
  } else if(error) {
    content = <ErrorMessage message={error} backUrl={"/patients"} />
  }

  return <div className={"App-page-container"}>
    <PageTitle value={title} backUrl={"/patients"} />
    {content}
  </div>
}
