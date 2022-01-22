import {useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {usePatient} from "../hooks/usePatient";

export function EditAddressPage() {

  let params = useParams();

  let [patient, patientName, error] = usePatient(params.patientId);
  let title = "Working.."

  if(patient) {

    title = "Edit " + patientName + "'s addresses"
  } else if(error) {

    title = patientName
  }

  return <div className={"App-page-container"}>
    <PageTitle value={title} backUrl={"/patients/" + params.patientId}/>


  </div>;
}
