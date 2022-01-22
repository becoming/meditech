import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../PageTitle";

interface Props {
  title: string
  patientId: string
}

export function PatientProfileToolbar(props: Props) {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={props.title} backUrl={"/patients"} />
    <InputGroup placeholder="Find patients..." />
    <Link to={`/patients/${props.patientId}/address/new`}>
      <Button icon="add-location">New address</Button>
    </Link>
  </ControlGroup>

}
