import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../PageTitle";

interface Props {
  title: string
}

export function PatientsListingToolbar(props: Props) {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={props.title} />
    <InputGroup placeholder="Find patients..." />
    <Link to={"/patients/create"}>
      <Button icon="new-person">New patient</Button>
    </Link>
  </ControlGroup>

}
