import {Link} from "react-router-dom";
import {Button, Classes, FormGroup} from "@blueprintjs/core";
import {WarningMessage} from "./WarningMessage";

interface Props {
  disabled: boolean
  cancelLink: string
  onSave: () => void
  error?: boolean
}
export function FormCancelSave(props: Props) {

  let errorMsg = <span/>
  if (props.error) {
    errorMsg = <WarningMessage message={"Could not save the edits, maybe try again later ?"}/>
  }

  return <FormGroup
    intent={"primary"}
    disabled={props.disabled}>

    <Link to={props.cancelLink}>
      <Button className={Classes.MINIMAL}
              intent={"none"} text={"Cancel"}
              disabled={props.disabled}/>
    </Link>

    <Button intent={"success"} icon="small-tick" text={"Save identity"}
            onClick={props.onSave}
            disabled={props.disabled}/>

    {errorMsg}

  </FormGroup>
}
