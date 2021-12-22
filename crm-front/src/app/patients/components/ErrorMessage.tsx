import {Button, Callout} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {Classes as Classes2} from "@blueprintjs/popover2";

export function ErrorMessage(props: { message: string, backUrl: string }) {
  return <Callout intent={"warning"} className={"App-error-message"}>
    {props.message}

    <Link to={props.backUrl}>
      <Button className={Classes2.POPOVER2_DISMISS} text={"Go to " + props.backUrl} />
    </Link>
  </Callout>;
}
