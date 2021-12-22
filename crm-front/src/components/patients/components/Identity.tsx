import {PatientIdentityView} from "../vo/PatientIdentityView";
import {Card} from "@blueprintjs/core";
import {fullNameI} from "../../../helpers/PatientHelper";
import {toDate} from "../../../helpers/DateHelper";
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
  identity: PatientIdentityView
  patientId: string
}
export function Identity(props: Props) {

  let trs:JSX.Element[] = [];
  trs.push(addTr("Full name", fullNameI(props.identity), ))
  trs.push(addTr("Patient since", toDate(props.identity.created), `Patient since ${props.identity.created}`))
  trs.push(addTr("Birth date", toDate(props.identity.birthDate)))

  if(props.identity.deathDate) {
    trs.push(addTr("Death date", toDate(props.identity.deathDate)))
  }

  trs.push(addTr("Last time updated", props.identity.updated))

  return <Card className={"App-patient-identity"}>
    <table className="bp4-html-table bp4-html-table-striped">
      <tbody>
      {trs}
      </tbody>
    </table>
    <EditLink link={`/patients/${props.patientId}/identity/${props.identity.id}/edit`} />
  </Card>;
}
