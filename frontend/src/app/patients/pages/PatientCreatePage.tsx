import {PageTitle} from "../../common/components/PageTitle";
import {useState} from "react";
import {titlesHelper} from "../../common/helpers/TitlesHelper";
import {patientService} from "../PatientService";
import {useNavigate} from "react-router-dom";
import {FormTitleSelect} from "../../common/components/form/FormTitleSelect";
import {FormInput} from "../../common/components/form/FormInput";
import {FormActionButtons} from "../../common/components/form/FormActionButtons";
import {NewIdentityRequest} from "../../common/vo/identity/NewIdentityRequest";

export function PatientCreatePage() {
  const [error, setError] = useState(false);

  const [title, setTitle] = useState(titlesHelper[0]);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [disabled, setDisabled] = useState(false);

  let navigate = useNavigate();

  const onSave = () => {
    setDisabled(true);

    const identity: NewIdentityRequest = {
      firstName: firstName,
      lastName: lastName,
      title: title
    }

    patientService.create(identity)
      .subscribe({
        next: (p) => navigate("/patients/" + p.id),
        error: e => {
          setDisabled(false)
          setError(e)
        }
      })
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"New patient"} backUrl={"/patients"}/>

    <div className={"App-form"}>

      <FormTitleSelect disabled={disabled} onItemSelect={setTitle}/>

      <FormInput htmlId={"firstName"}
                 label={"First name"}
                 placeholder={"John"}
                 required={true}
                 disabled={disabled}
                 onChange={setFirst}/>

      <FormInput htmlId={"lastName"}
                 label={"Last name"}
                 placeholder={"Doe"}
                 required={true}
                 disabled={disabled}
                 onChange={setLast}/>

      <FormActionButtons disabled={disabled}
                         cancelLink="/patients"
                         onSave={onSave}
                         error={error}/>


    </div>
  </div>

}
