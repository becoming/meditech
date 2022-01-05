import {ControlGroup} from "@blueprintjs/core";
import {PageTitle} from "../PageTitle";

export function Toolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={"About"} />
  </ControlGroup>


}
