import {toLuxFormat} from "../../../helpers/AddressHelper";
import {PatientAddressVO} from "../../vo/PatientAddressVO";
import {toDateTimeString} from "../../../helpers/DateHelper";
import {Card} from "@blueprintjs/core";
import {EditLink} from "../EditLink";

const addTr = (value?: string, title?: string) => {
  if(!title) {
    title = `${value}`
  }

  return <tr title={title} key={value}>
    <td>{value}</td>
  </tr>
}

interface Props {
  value: PatientAddressVO[]
  patientId: string
}

export function AddressList(props: Props) {
  let trs:JSX.Element[] = [];

  props.value.forEach(address => {
    trs.push(addTr(toLuxFormat(address)))
    trs.push(addTr(toDateTimeString(address.updated), "Created " + toDateTimeString(address.updated)))
    trs.push(addTr(""))
  })

  return <Card className={"App-patient-identity"}>
    <table className="bp4-html-table bp4-html-table-striped">
      <tbody>
      {trs}
      </tbody>
    </table>
    <EditLink link={`/patients/${props.patientId}/address/edit`} />
  </Card>
}
