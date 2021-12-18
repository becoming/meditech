import {Button, Classes, ControlGroup, InputGroup, Label} from "@blueprintjs/core";
import {Link} from "react-router-dom";

export function Toolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <span className={"App-toolbar-title"}>Patients</span>
    <InputGroup placeholder="Find patients..." />
    <Link to={"/patients/new"}>
      <Button icon="new-person">New patient</Button>
    </Link>
  </ControlGroup>

}
