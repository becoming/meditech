import {Link} from "react-router-dom";
import {Button, Classes, ControlGroup, FormGroup, InputGroup} from "@blueprintjs/core";
import {DatePicker} from "@blueprintjs/datetime";
import {cloneIdentity, PatientIdentityVO} from "../../vo/PatientIdentityVO";
import {ChangeEvent, useState} from "react";
import {patientService} from "../../PatientService";
import {WarningMessage} from "../WarningMessage";

interface Props {
  patientId: string
  identity: PatientIdentityVO
  onSave: (v: PatientIdentityVO) => void
}

export function EditIdentityForm(props: Props) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [newIdentity] = useState(cloneIdentity(props.identity));

  const onFirstName = (e: ChangeEvent<HTMLInputElement>) => newIdentity.firstName = e.target.value
  const onLastName = (e: ChangeEvent<HTMLInputElement>) => newIdentity.lastName = e.target.value
  const onBirthDate = (date: Date) => newIdentity.birthDate = date
  const onBirthDateReset = () => newIdentity.birthDate = undefined
  const onDeathDate = (date: Date) => newIdentity.deathDate = date
  const onDeathDateReset = () => newIdentity.deathDate = undefined

  const onSave = () => {
    if (!props.identity) return

    setDisabled(true);

    patientService.updateIdentity(newIdentity, props.patientId)
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
                    value={props.identity.firstName} onChange={onFirstName}/>
      </FormGroup>

      <FormGroup
        intent={"primary"}
        label={"Last name"}
        labelInfo={"(required)"}
        labelFor="lastName"
        disabled={disabled}
      >
        <InputGroup id="lastName" placeholder="Doe" disabled={disabled} intent={"primary"}
                    value={props.identity.lastName} onChange={onLastName}/>
      </FormGroup>

      <ControlGroup>
        <FormGroup
          intent={"primary"}
          label={"Birth date"}
          labelFor="birthdate"
          disabled={disabled}
        >
          <Button className={Classes.MINIMAL} icon={"cross"} intent={"warning"} text={"Reset date"}
                  disabled={disabled} onClick={onBirthDateReset}/>
          <DatePicker
            className={Classes.ELEVATION_1}
            value={props.identity.birthDate}
            onChange={onBirthDate}
          />

        </FormGroup>

        <FormGroup
          intent={"primary"}
          label={"Death date"}
          labelFor="birthdate"
          disabled={disabled}
        >
          <Button className={Classes.MINIMAL} icon={"cross"} intent={"warning"} text={"Reset date"}
                  disabled={disabled} onClick={onDeathDateReset}/>

          <DatePicker
            className={Classes.ELEVATION_1}
            value={props.identity.deathDate}
            onChange={(date: Date) => onDeathDate(date)}
          />

        </FormGroup>
      </ControlGroup>

      <FormGroup
        intent={"primary"}
        disabled={disabled}>

        <Link to={`/patients/${props.patientId}`}>
          <Button className={Classes.MINIMAL} intent={"none"} text={"Cancel"}/>
        </Link>

        <Button intent={"success"} icon="small-tick" text={"Save identity"} onClick={onSave}/>

      </FormGroup>

      {errorMsg}

    </div>

  </div>;
}
