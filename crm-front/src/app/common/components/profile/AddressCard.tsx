import {toLuxFormat} from "../../helpers/AddressHelper";
import {AddressVO} from "../../vo/address/AddressVO";
import {toDateTimeString} from "../../helpers/DateHelper";
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
  address: AddressVO
  patientId?: string
  doctorId?: string
}

export function AddressCard(props: Props) {
  let trs:JSX.Element[] = []

  let address = props.address
  trs.push(addTr(toLuxFormat(address)))
  trs.push(addTr(toDateTimeString(address.updated), "Created " + toDateTimeString(address.updated)))

  let id = props.patientId || props.doctorId
  let resource = props.patientId ? "patients" : "doctors"

  let editUrl = `/${resource}/${id}/address/${address.id}/edit`

  return <Card className={"App-address-card"}>
    <table className="bp4-html-table bp4-html-table-striped">
      <tbody>
      {trs}
      </tbody>
    </table>
    <EditLink link={editUrl} />
  </Card>
}
