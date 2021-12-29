import {ControlGroup} from "@blueprintjs/core";
import {PatientIdentityVO} from "../../vo/PatientIdentityVO";
import {useState} from "react";
import {patientService} from "../../PatientService";
import {FormInput} from "../FormInput";
import {FormDate} from "../FormDate";
import {FormCancelSave} from "../FormCancelSave";

interface Props {
  patientId: string
  identity: PatientIdentityVO
  onSave: (v: PatientIdentityVO) => void
}

export function EditIdentityForm(props: Props) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const onFirstName = (value: string) => props.identity.firstName = value
  const onLastName = (value: string) => props.identity.lastName = value
  const onBirthDate = (date: Date) => props.identity.birthDate = date
  const onDeathDate = (date: Date) => props.identity.deathDate = date

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

  return <div className={"App-page-container"}>

    <div className={"App-form"}>

      <FormInput htmlId={"firstName"}
                 label={"First name"}
                 placeholder={"John"}
                 required={true}
                 disabled={disabled}
                 value={props.identity.firstName}
                 onChange={onFirstName} />

      <FormInput htmlId={"lastName"}
                 label={"Last name"}
                 placeholder={"Doe"}
                 required={true}
                 disabled={disabled}
                 value={props.identity.lastName}
                 onChange={onLastName} />

      <ControlGroup>
        <FormDate title={"Birth date"}
                  onChange={onBirthDate}
                  date={props.identity.birthDate}
                  disabled={disabled} />

        <FormDate title={"Death date"}
                  onChange={onDeathDate}
                  date={props.identity.deathDate}
                  disabled={disabled} />
      </ControlGroup>

      <FormCancelSave disabled={disabled}
                      cancelLink={`/patients/${props.patientId}`}
                      onSave={onSave}
                      error={error} />
    </div>

  </div>;
}
