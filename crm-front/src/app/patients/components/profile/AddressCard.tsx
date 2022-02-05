import {toLuxFormat} from "../../../helpers/AddressHelper";
import {PatientAddressVO} from "../../vo/PatientAddressVO";
import {toDateTimeString} from "../../../helpers/DateHelper";
import {Card} from "@blueprintjs/core";
import {EditLink} from "./EditLink";

const addTr = (value?: string, title?: string) => {
  if(!title) {
    title = `${value}`
  }

  return <tr title={title} key={value}>
    <td>{value}</td>
  </tr>
}

interface Props {
  address: PatientAddressVO
  patientId: string
}

export function AddressCard(props: Props) {
  let trs:JSX.Element[] = []

  let address = props.address
  trs.push(addTr(toLuxFormat(address)))
  trs.push(addTr(toDateTimeString(address.updated), "Created " + toDateTimeString(address.updated)))

  return <Card className={"App-patient-identity"}>
    <table className="bp4-html-table bp4-html-table-striped">
      <tbody>
      {trs}
      </tbody>
    </table>
    <EditLink link={`/patients/${props.patientId}/address/${address.id}/edit`} />
  </Card>
}
