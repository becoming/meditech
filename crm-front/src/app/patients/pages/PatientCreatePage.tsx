import {PageTitle} from "../../common/components/PageTitle";
import {useState} from "react";
import {titles} from "../components/Titles";
import {patientService} from "../PatientService";
import {useNavigate} from "react-router-dom";
import {TitleSelect} from "../components/TitleSelect";
import {FormInput} from "../../common/components/FormInput";
import {FormActionButtons} from "../../common/components/FormActionButtons";

export function PatientCreatePage() {
  const [error, setError] = useState(false);

  const [title, setTitle] = useState(titles[0]);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [disabled, setDisabled] = useState(false);

  let navigate = useNavigate();

  const onSave = () => {
    setDisabled(true);

    patientService.create(title.name, firstName, lastName)
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

      <TitleSelect disabled={disabled} onItemSelect={setTitle} />

      <FormInput htmlId={"firstName"}
                 label={"First name"}
                 placeholder={"John"}
                 required={true}
                 disabled={disabled}
                 onChange={setFirst} />

      <FormInput htmlId={"lastName"}
                 label={"Last name"}
                 placeholder={"Doe"}
                 required={true}
                 disabled={disabled}
                 onChange={setLast} />

      <FormActionButtons disabled={disabled}
                         cancelLink="/patients"
                         onSave={onSave}
                         error={error} />


    </div>
  </div>

}
