import {useNavigate} from "react-router-dom";
import {PatientVO} from "../../vo/PatientVO";
import {FullName} from "./FullName";
import {Birthdate} from "./Birthdate";
import {Address} from "./Address";
import {Created} from "./Created";
import {toDateString, toDateString2} from "../../../helpers/DateHelper";

interface Props {
  patient: PatientVO
}

export function ListItem(props: Props) {
  let p = props.patient;
  let navigate = useNavigate();

  return <div className="App-patient-list-item" onClick={() => navigate("/patients/" + p.id)}>
    <Created dateTime={toDateString2(p.identity.created)} />
    <FullName firstName={p.identity.firstName} lastName={p.identity.lastName} />
    <Birthdate date={toDateString(p.identity.birthDate)} />
    <Address value={p.addresses} />
  </div>

}
