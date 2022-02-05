import {DatePicker} from "@blueprintjs/datetime";
import {Classes, FormGroup} from "@blueprintjs/core";
import {useState} from "react";
import {toDateString} from "../../../helpers/DateHelper";

interface Props {
  disabled: boolean
  onChange: (date: Date) => void
  title: string
  date?: Date
}
export function FormDate(props: Props){
  const [label, setLabel] = useState(toDateString(props.date));

  const onChange = (date: Date) => {
    setLabel(toDateString(date))
    props.onChange(date)
  }

  let disabledClass = props.disabled ? "App-disabled-date-picker" : ""
  let titleLabel = label ? ", " + label : ""

  return <FormGroup
    intent={"primary"}
    label={props.title + titleLabel}
    labelFor="birthdate"
    disabled={props.disabled}
  >
    <DatePicker
      className={`${Classes.ELEVATION_1} ${disabledClass}`}
      defaultValue={props.date}
      onChange={onChange}
      showActionsBar={true}
      clearButtonText={"Reset date"}
      todayButtonText={"Select today"}
    />

  </FormGroup>
}
