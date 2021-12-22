import {Patient} from "../vo/Patient";
import {Identity} from "./Identity";

interface Props {
  patient: Patient
}

export function PatientWidgets(props: Props) {
  return <div className={"App-page-container"}>
    <Identity identity={props.patient.identity}
              patientId={props.patient.id} />
  </div>
}
