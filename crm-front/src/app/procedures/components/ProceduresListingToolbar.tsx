import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../PageTitle";

export function ProceduresListingToolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value="Procedures" />
    <InputGroup placeholder="Find procedures..." />
    <Link to={"/procedures/create"}>
      <Button icon="plus">New procedure</Button>
    </Link>
  </ControlGroup>

}
