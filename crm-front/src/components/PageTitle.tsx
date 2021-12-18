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
    <h3 className="bp4-heading">
      {backButton}
      {props.value}</h3>
  </div>
}
