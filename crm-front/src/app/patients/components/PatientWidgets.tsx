import {PatientVO} from "../vo/PatientVO";
import {Identity} from "./Identity";

interface Props {
  patient: PatientVO
}

export function PatientWidgets(props: Props) {
  return <div className={"App-page-container"}>
    <Identity identity={props.patient.identity}
              patientId={props.patient.id} />
  </div>
}
