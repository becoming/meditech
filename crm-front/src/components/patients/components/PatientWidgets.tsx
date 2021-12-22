import {PatientView} from "../vo/PatientView";
import {Identity} from "./Identity";

interface Props {
  patient: PatientView
}

export function PatientWidgets(props: Props) {
  return <div className={"App-page-container"}>
    <Identity identity={props.patient.identity}
              patientId={props.patient.id} />
  </div>
}
