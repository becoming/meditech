import {FormGroup, InputGroup} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import {ChangeEvent} from "react";

interface Props {
  htmlId: string
  disabled: boolean
  label: string
  placeholder: string
  onChange: (value: string) => void
  value?: string
  required?: boolean
  intent?: Intent
}

export function FormInput(props: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return <FormGroup
    intent={props.intent ? props.intent : "primary"}
    label={props.label}
    labelInfo={props.required ? "(required)" : ""}
    labelFor={props.htmlId}
    disabled={props.disabled}
  >
    <InputGroup id={props.htmlId}
                placeholder={props.placeholder}
                disabled={props.disabled}
                intent={props.intent ? props.intent : "primary"}
                defaultValue={props.value}
                onChange={onChange}/>
  </FormGroup>
}
