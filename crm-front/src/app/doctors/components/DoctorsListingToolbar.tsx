import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";

export function DoctorsListingToolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value="Doctors" />
    <InputGroup placeholder="Find doctors..." />
    <Link to={"/doctors/create"}>
      <Button icon="plus">New doctor</Button>
    </Link>
  </ControlGroup>

}
