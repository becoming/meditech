import {Button, Classes} from "@blueprintjs/core";
import {Link} from "react-router-dom";

interface Props {
  link: string
}

export function EditLink(props: Props) {
  return <Link to={props.link}>
    <Button intent={"primary"} className={Classes.MINIMAL}
            rightIcon="annotation"
            text={"Edit"} />
  </Link>
}
