import {Button, ControlGroup, FormGroup, InputGroup} from "@blueprintjs/core";
import {PageTitle} from "../PageTitle";
import {Select} from "@blueprintjs/select";
import {useCallback, useState} from "react";
import {Title} from "../Title";
import {renderTitle, titles} from "./Titles";
import {patientService} from "./PatientService";
import {useNavigate} from "react-router-dom";

const TitleSelect = Select.ofType<Title>();

export function NewPatient() {
  const [title, setTitle] = useState(titles[0]);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleItemSelect = useCallback((newFilm: Title) => {
    setTitle(newFilm);
  }, []);

  const onCreate = () => {
    setLoading(true);

    patientService.create(title.name, firstName, lastName)
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
    <PageTitle value={"New patient"} backUrl={"/patients"}/>

    <div className={"App-form"}>

      <ControlGroup vertical={false}>
        <FormGroup label="Title">
          <TitleSelect
            disabled={loading}
            key={title.name}
            items={titles}
            activeItem={title}
            onItemSelect={handleItemSelect}
            itemRenderer={renderTitle}>
            <Button icon="caret-down" intent="none" text={title.name} disabled={loading}/>
          </TitleSelect>
        </FormGroup>
        <FormGroup label="First name" labelFor="firstName">
          <InputGroup id="firstName" placeholder="John" disabled={loading}
                      onChange={(e) => setFirst(e.target.value)}/>
        </FormGroup>

        <FormGroup label="Last name" labelFor="lastName">
          <InputGroup id="lastName" placeholder="Doe" disabled={loading}
                      onChange={(e) => setLast(e.target.value)}/>
        </FormGroup>

        <FormGroup label="&nbsp;">
          <Button rightIcon="arrow-right" intent="success" text="Continue"
                  disabled={loading}
                  onClick={onCreate}/>
        </FormGroup>

      </ControlGroup>

    </div>
  </div>

}
