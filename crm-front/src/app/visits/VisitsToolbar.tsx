import {ControlGroup, InputGroup} from "@blueprintjs/core";
import {PageTitle} from "../common/components/PageTitle";

export function VisitsToolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={"Visits"} />
    <InputGroup placeholder="Find visits..." />

  </ControlGroup>

}
