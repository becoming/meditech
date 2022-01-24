import {Button, Classes} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {IconName} from "@blueprintjs/icons";

interface Props {
  link: string
  value?: string
  hideIcon?: boolean
}

export function EditLink(props: Props) {
  let button;
  let value = props.value || "Edit";

  if (props.hideIcon) {
    button = <Button intent={"primary"} className={Classes.MINIMAL}
                     text={value}/>
  } else {
    button = <Button intent={"primary"} className={Classes.MINIMAL}
                     rightIcon="annotation"
                     text={value}/>

  }

  return <Link to={props.link}>
    {button}
  </Link>
}
