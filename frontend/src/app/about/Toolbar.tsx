import {ControlGroup} from "@blueprintjs/core";
import {PageTitle} from "../common/components/PageTitle";

export function Toolbar() {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={"About"}/>
  </ControlGroup>


}
