import {useNavigate} from "react-router-dom";
import {PatientView} from "../vo/PatientView";
import {FullName} from "./listing/FullName";
import {Birthdate} from "./listing/Birthdate";
import {Address} from "./listing/Address";
import {Created} from "./listing/Created";

interface Props {
  patient: PatientView
}

export function ListItem(props: Props) {
  let p = props.patient;
  let navigate = useNavigate();

  return <div className="App-patient-list-item" onClick={() => navigate("/patients/" + p.id)}>
    <Created dateTime={p.identity.created} />
    <FullName firstName={p.identity.firstName} lastName={p.identity.lastName} />
    <Birthdate date={p.identity.birthDate} />
    <Address value={p.addresses} />
  </div>

}
