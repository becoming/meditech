import {Button, Classes} from "@blueprintjs/core";
import {Link} from "react-router-dom";

export function PageTitle(props: {value: string, backUrl?: string}) {
  let backButton;
  if(props.backUrl) {
    backButton = <Link to={props.backUrl}>
      <Button className={Classes.MINIMAL} icon="arrow-left" />
    </Link>
  }

  return <div>
    <span className={"App-toolbar-title"}>
      {backButton}
      {props.value}
    </span>
  </div>
}
