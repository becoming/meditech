import {hasAddress, PatientVO} from "../vo/PatientVO";
import {Identity} from "./Identity";
import {AddressList} from "./listing/AddressList";
import {Card} from "@blueprintjs/core";
import {EditLink} from "./EditLink";

interface Props {
  patient: PatientVO
}

export function PatientWidgets(props: Props) {

  let patient = props.patient;
  let addresses

  if (hasAddress(patient)) {
    addresses = <AddressList value={patient.addresses} patientId={patient.id}/>
  } else {
    addresses =
      <Card>
        <EditLink link={`/patients/${props.patient.id}/address/edit`}
                  value={"Add address"}/>
      </Card>
  }

  return <div className={"App-page-content"}>
    <div className={"row"}>
      <div className={"col-sm-12 col-md-4"}>
        <Identity identity={patient.identity}
                  patientId={patient.id}/>

        {addresses}
      </div>
      <div className={"col-sm-12 col-md-8"}>
      </div>
    </div>

  </div>
}
