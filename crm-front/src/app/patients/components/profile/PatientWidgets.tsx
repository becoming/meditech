import {hasAddress, PatientVO} from "../../vo/PatientVO";
import {PatientIdentity} from "./PatientIdentity";
import {AddressList} from "../../../common/components/profile/AddressList";
import {Card} from "@blueprintjs/core";
import {EditLink} from "../../../common/components/EditLink";

interface Props {
  patient: PatientVO
}

export function PatientWidgets(props: Props) {

  let patient = props.patient
  let addresses

  if (hasAddress(patient)) {
    addresses = <AddressList value={patient.addresses} patientId={patient.id}/>
  } else {
    addresses =
      <Card>
        <span>We have no addresses for this patient</span>
        <EditLink link={`/patients/${props.patient.id}/address/create`}
                  value={"New address"}/>
      </Card>
  }

  return <div className={"App-page-content"}>
    <div className={"row"}>
      <div className={"col-sm-12 col-md-4"}>
        <PatientIdentity identity={patient.identity}
                         patientId={patient.id}/>

        {addresses}
      </div>
      <div className={"col-sm-12 col-md-8"}>
      </div>
    </div>

  </div>
}
