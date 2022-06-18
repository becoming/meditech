import {Card} from "@blueprintjs/core";
import {identityFullName} from "../../../common/helpers/IdentityHelper";
import {toDateString, toDateTimeString} from "../../../common/helpers/DateHelper";
import {EditLink} from "../../../common/components/EditLink";
import {IdentityVO} from "../../../common/vo/identity/IdentityVO";

const addTr = (key: string, value?: string, title?: string) => {
  if (!title) {
    title = `${key} ${value}`
  }

  return <tr title={title} key={key + value}>
    <td>{key}</td>
    <td>{value}</td>
  </tr>
}

interface Props {
  identity: IdentityVO
  doctorId: string
}

export function DoctorIdentity(props: Props) {

  let trs: JSX.Element[] = [];
  trs.push(addTr("Full name", identityFullName(props.identity),))

  if (props.identity.birthDate) {
    trs.push(addTr("Birth date", toDateString(props.identity.birthDate)))
  }

  if (props.identity.deathDate) {
    trs.push(addTr("Deceased", toDateString(props.identity.deathDate)))
  }

  trs.push(addTr("Doctor since", toDateTimeString(props.identity.created), `Doctor since ${props.identity.created}`))
  trs.push(addTr("Last time updated", toDateTimeString(props.identity.updated)))

  return <Card className={"App-doctor-identity"}>
    <table className="bp4-html-table bp4-html-table-striped">
      <tbody>
      {trs}
      </tbody>
    </table>
    <EditLink link={`/doctors/${props.doctorId}/identity/${props.identity.id}/edit`}/>
  </Card>;
}
