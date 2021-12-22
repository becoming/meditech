import {Button, ControlGroup, FormGroup, InputGroup} from "@blueprintjs/core";
import {PageTitle} from "../../PageTitle";
import {Select} from "@blueprintjs/select";
import {useCallback, useState} from "react";
import {TitleView} from "../vo/TitleView";
import {renderTitle, titles} from "../components/Titles";
import {patientService} from "../PatientService";
import {useNavigate} from "react-router-dom";

const TitleSelect = Select.ofType<TitleView>();

export function NewPatientPage() {
  const [title, setTitle] = useState(titles[0]);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleItemSelect = useCallback((newFilm: TitleView) => {
    setTitle(newFilm);
  }, []);

  const onContinue = () => {
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
          <Button icon="small-tick" intent="success" text="Create patient"
                  disabled={loading}
                  onClick={onContinue}/>
        </FormGroup>

      </ControlGroup>

    </div>
  </div>

}
