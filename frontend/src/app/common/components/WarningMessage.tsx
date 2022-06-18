import {Button, Callout} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {Classes as Classes2} from "@blueprintjs/popover2";

export function WarningMessage(props: { message: string, backUrl?: string }) {

  let link = <span/>

  if (props.backUrl) {
    link = <Link to={props.backUrl}>
      <Button className={Classes2.POPOVER2_DISMISS} text={"Continue to " + props.backUrl}/>
    </Link>
  }

  return <Callout intent={"warning"} className={"App-error-message"}>
    {props.message}

    {link}
  </Callout>;
}
