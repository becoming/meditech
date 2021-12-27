import {PatientIdentityVO} from "../vo/PatientIdentityVO";
import {Card} from "@blueprintjs/core";
import {identityFullName} from "../../helpers/PatientHelper";
import {toDateString, toDateTimeString} from "../../helpers/DateHelper";
import {EditLink} from "./EditLink";

const addTr = (key: string, value?: string, title?: string) => {
  if(!title) {
    title = `${key} ${value}`
  }

  return <tr title={title} key={key + value}>
    <td>{key}</td>
    <td>{value}</td>
  </tr>
}

interface Props {
  identity: PatientIdentityVO
  patientId: string
}
export function Identity(props: Props) {

  let trs:JSX.Element[] = [];
  trs.push(addTr("Full name", identityFullName(props.identity), ))

  if(props.identity.birthDate) {
    trs.push(addTr("Birth date", toDateString(props.identity.birthDate)))
  }

  if(props.identity.deathDate) {
    trs.push(addTr("Death date", toDateString(props.identity.deathDate)))
  }

  trs.push(addTr("Patient since", toDateTimeString(props.identity.created), `Patient since ${props.identity.created}`))
  trs.push(addTr("Last time updated", toDateTimeString(props.identity.updated)))

  return <Card className={"App-patient-identity"}>
    <table className="bp4-html-table bp4-html-table-striped">
      <tbody>
      {trs}
      </tbody>
    </table>
    <EditLink link={`/patients/${props.patientId}/identity/${props.identity.id}/edit`} />
  </Card>;
}
