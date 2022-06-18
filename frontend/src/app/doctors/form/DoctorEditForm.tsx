import {ControlGroup} from "@blueprintjs/core";
import {useState} from "react";
import {FormInput} from "../../common/components/form/FormInput";
import {FormDate} from "../../common/components/form/FormDate";
import {FormActionButtons} from "../../common/components/form/FormActionButtons";
import {IdentityUpdateRequest} from "../../common/vo/identity/IdentityUpdateRequest";
import {IdentityVO} from "../../common/vo/identity/IdentityVO";
import {identityService} from "../../common/IdentityService";

interface Props {
  doctorId: string
  identity: IdentityVO
  onSave: (v: IdentityVO) => void
}

export function DoctorEditForm(props: Props) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const [firstName, setFirstName] = useState(props.identity.firstName)
  const [lastName, setLastName] = useState(props.identity.lastName)
  const [birthDate, setBirthDate] = useState(props.identity.birthDate)
  const [deathDate, setDeathDate] = useState(props.identity.deathDate)
  const [medicalId, setMedicalId] = useState(props.identity.medicalId)
  const [nationalId, setNationalId] = useState(props.identity.nationalId)

  const onSave = () => {
    setDisabled(true);

    const update: IdentityUpdateRequest = {
      id: props.identity.id,
      birthDate: birthDate,
      deathDate: deathDate,
      firstName: firstName,
      lastName: lastName,
      medicalId: medicalId,
      nationalId: nationalId
    }

    identityService.update(update)
      .subscribe({
        next: (p) => props.onSave(p),
        error: err => {
          setDisabled(false)
          setError(err)
        },
        complete: () => setDisabled(false)
      })
  }

  return <div>

    <div className={"App-form"}>

      <FormInput htmlId={"firstName"}
                 label={"First name"}
                 placeholder={"John"}
                 required={true}
                 disabled={disabled}
                 value={firstName}
                 onChange={setFirstName}/>

      <FormInput htmlId={"lastName"}
                 label={"Last name"}
                 placeholder={"Doe"}
                 required={true}
                 disabled={disabled}
                 value={lastName}
                 onChange={setLastName}/>

      <FormInput htmlId={"medicalId"}
                 label={"Medical Id"}
                 placeholder={"19691231000696"}
                 required={false}
                 disabled={disabled}
                 value={medicalId}
                 onChange={setMedicalId}/>

      <FormInput htmlId={"nationalId"}
                 label={"National Id"}
                 placeholder={"A2021123"}
                 required={false}
                 disabled={disabled}
                 value={nationalId}
                 onChange={setNationalId}/>

      <ControlGroup>
        <FormDate title={"Birth date"}
                  onChange={setBirthDate}
                  date={birthDate}
                  disabled={disabled}/>

        <FormDate title={"Deceased"}
                  onChange={setDeathDate}
                  date={deathDate}
                  disabled={disabled}/>
      </ControlGroup>

      <FormActionButtons disabled={disabled}
                         cancelLink={`/doctors/${props.doctorId}`}
                         onSave={onSave}
                         saveLabel={"Save identity"}
                         error={error}/>
    </div>

  </div>;
}
