import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../../common/components/PageTitle";

export function PatientsListingToolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={"Patients"} />
    <InputGroup placeholder="Find patients..." />
    <Link to={"/patients/create"}>
      <Button icon="new-person">New patient</Button>
    </Link>
  </ControlGroup>

}
