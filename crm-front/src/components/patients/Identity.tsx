import {PatientIdentity} from "./vo/PatientIdentity";
import {Card} from "@blueprintjs/core";
import {fullNameI} from "../helper/PatientHelper";

const addTr = (key: string, value: string) => {
  return <tr>
    <td>{key}</td>
    <td>{value}</td>
  </tr>
}

interface Props {
  identity: PatientIdentity
}
export function Identity(props: Props) {

  let trs:JSX.Element[] = [];
  trs.push(addTr("Full name", fullNameI(props.identity)))
  trs.push(addTr("Since", props.identity.created))
  trs.push(addTr("Birth date", props.identity.birthDate))
  trs.push(addTr("Death date", props.identity.deathDate))
  trs.push(addTr("", ""))
  trs.push(addTr("Last time updated", props.identity.updated))

  return <Card className={"App-patient-identity"}>
    <table className="bp4-html-table">
      <tbody>
      {trs}
      </tbody>
    </table>
  </Card>;
}
