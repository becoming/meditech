import {PatientVO} from "../vo/PatientVO";
import {Identity} from "./Identity";
import {Address} from "./listing/Address";

interface Props {
  patient: PatientVO
}

export function PatientWidgets(props: Props) {

  let addresses = <span><i>No addresses</i></span>

  if(props.patient.addresses && props.patient.addresses.length > 0) {
    addresses = <Address value={props.patient.addresses} />
  }

  return <div className={"App-page-content"}>
    <div className={"row"}>
      <div className={"col-sm-12 col-md-4"}>
        <Identity identity={props.patient.identity}
                  patientId={props.patient.id}/>

        {addresses}
      </div>
      <div className={"col-sm-12 col-md-8"}>
      </div>
    </div>

  </div>
}
