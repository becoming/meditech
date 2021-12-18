import {Button, Classes, ControlGroup, InputGroup, Label} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../PageTitle";

export function Toolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={"Patients"} />
    <InputGroup placeholder="Find patients..." />
    <Link to={"/patients/new"}>
      <Button icon="new-person">New patient</Button>
    </Link>
  </ControlGroup>

}
