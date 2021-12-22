import {Link, useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {Button, Classes, ControlGroup, FormGroup, InputGroup} from "@blueprintjs/core";
import {useState} from "react";
import {DatePicker} from "@blueprintjs/datetime";
import {patientService} from "../PatientService";

export function EditIdentityPage() {

  let navigate = useNavigate();
  let params = useParams();
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [loading, setLoading] = useState(false);
  let [birthDate, setBirthDate] = useState(new Date())
  let [deathDate, setDeathDate] = useState(new Date())

  const onContinue = () => {
    setLoading(true);

    patientService.create("", firstName, lastName)
      .subscribe({
        next: (p) => navigate("/patients/" + p.id),
        error: err => {
          setLoading(false)
          console.log(err)
        },
        complete: () => setLoading(false)
      })
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit patient's identity"} backUrl={"/patients/" + params.patientId}/>

    <div className={"App-form"}>
      <FormGroup
        intent={"primary"}
        label={"First name"}
        labelInfo={"(required)"}
        labelFor="firstName"
        disabled={loading}
      >
        <InputGroup id="firstName" placeholder="John" disabled={loading} intent={"primary"}
                    onChange={(e) => setFirst(e.target.value)}/>
      </FormGroup>

      <FormGroup
        intent={"primary"}
        label={"Last name"}
        labelInfo={"(required)"}
        labelFor="lastName"
        disabled={loading}
      >
        <InputGroup id="lastName" placeholder="Doe" disabled={loading} intent={"primary"}
                    onChange={(e) => setLast(e.target.value)}/>
      </FormGroup>

      <ControlGroup>
        <FormGroup
          intent={"primary"}
          label={"Birth date"}
          labelFor="birthdate"
          disabled={loading}
        >
          <Button className={Classes.MINIMAL} icon={"cross"} intent={"warning"} text={"Reset date"}/>
          <DatePicker
            className={Classes.ELEVATION_1}
            onChange={(date: Date) => setBirthDate(date)}
          />

        </FormGroup>

        <FormGroup
          intent={"primary"}
          label={"Death date"}
          labelFor="birthdate"
          disabled={loading}
        >
          <Button className={Classes.MINIMAL} icon={"cross"} intent={"warning"} text={"Reset date"}/>

          <DatePicker
            className={Classes.ELEVATION_1}
            onChange={(date: Date) => setDeathDate(date)}
          />

        </FormGroup>
      </ControlGroup>

      <FormGroup
        intent={"primary"}
        disabled={loading}
      >

        <Link to={`/patients/${params.patientId}`}>
          <Button className={Classes.MINIMAL} intent={"none"} text={"Cancel"}/>
        </Link>

        <Button intent={"success"} icon="small-tick" text={"Save identity"} onClick={onContinue}/>

      </FormGroup>
    </div>

  </div>;
}
