import {Link} from "react-router-dom";
import {Button, Classes, ControlGroup, FormGroup, InputGroup} from "@blueprintjs/core";
import {DatePicker} from "@blueprintjs/datetime";
import {PatientIdentityVO} from "../../vo/PatientIdentityVO";
import {ChangeEvent, useState} from "react";
import {patientService} from "../../PatientService";
import {WarningMessage} from "../WarningMessage";
import {toDateString} from "../../../helpers/DateHelper";

interface Props {
  patientId: string
  identity: PatientIdentityVO
  onSave: (v: PatientIdentityVO) => void
}

export function EditIdentityForm(props: Props) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [birthDateLabel, setBirthDateLabel] = useState(toDateString(props.identity.birthDate));
  const [deathDateLabel, setDeathDateLabel] = useState(toDateString(props.identity.deathDate));

  const onFirstName = (e: ChangeEvent<HTMLInputElement>) => props.identity.firstName = e.target.value
  const onLastName = (e: ChangeEvent<HTMLInputElement>) => props.identity.lastName = e.target.value
  const onBirthDate = (date: Date) => (props.identity.birthDate = date) && setBirthDateLabel(toDateString(date))
  const onDeathDate = (date: Date) => (props.identity.deathDate = date) && setDeathDateLabel(toDateString(date))

  const onSave = () => {
    if (!props.identity) return

    setDisabled(true);

    patientService.updateIdentity(props.identity, props.patientId)
      .subscribe({
        next: (p) => props.onSave(p),
        error: err => {
          setDisabled(false)
          setError(err)
        },
        complete: () => setDisabled(false)
      })
  }

  let errorMsg = <span/>
  if (error) {
    errorMsg = <WarningMessage message={"Could not save the edits, maybe try again later ?"}/>
  }

  let disabledClass = disabled ? "App-disabled-date-picker" : ""

  return <div className={"App-page-container"}>

    <div className={"App-form"}>
      <FormGroup
        intent={"primary"}
        label={"First name"}
        labelInfo={"(required)"}
        labelFor="firstName"
        disabled={disabled}
      >
        <InputGroup id="firstName" placeholder="John" disabled={disabled} intent={"primary"}
                    defaultValue={props.identity.firstName} onChange={onFirstName}/>
      </FormGroup>

      <FormGroup
        intent={"primary"}
        label={"Last name"}
        labelInfo={"(required)"}
        labelFor="lastName"
        disabled={disabled}
      >
        <InputGroup id="lastName" placeholder="Doe" disabled={disabled} intent={"primary"}
                    defaultValue={props.identity.lastName} onChange={onLastName}/>
      </FormGroup>

      <ControlGroup>
        <FormGroup
          intent={"primary"}
          label={"Birth date, " + birthDateLabel}
          labelFor="birthdate"
          disabled={disabled}
        >
          <DatePicker
            className={`${Classes.ELEVATION_1} ${disabledClass}`}
            defaultValue={props.identity.birthDate}
            onChange={onBirthDate}
            showActionsBar={true}
            clearButtonText={"Reset date"}
            todayButtonText={"Select today"}
          />

        </FormGroup>

        <FormGroup
          intent={"primary"}
          label={"Death date, " + deathDateLabel}
          labelFor="birthdate"
          disabled={disabled}
        >
          <DatePicker
            className={`${Classes.ELEVATION_1} ${disabledClass}`}
            defaultValue={props.identity.deathDate}
            onChange={onDeathDate}
            showActionsBar={true}
            clearButtonText={"Reset date"}
            todayButtonText={"Select today"}
          />

        </FormGroup>
      </ControlGroup>

      <FormGroup
        intent={"primary"}
        disabled={disabled}>

        <Link to={`/patients/${props.patientId}`}>
          <Button className={Classes.MINIMAL} intent={"none"} text={"Cancel"} disabled={disabled}/>
        </Link>

        <Button intent={"success"} icon="small-tick" text={"Save identity"}
                onClick={onSave} disabled={disabled}/>

      </FormGroup>

      {errorMsg}

    </div>

  </div>;
}
