import {Link} from "react-router-dom";
import {Patient} from "./vo/Patient";
import {toLuxFormat} from "../helper/AddressHelper";

interface Props {
  patient: Patient
}

export function ListItem(props: Props) {
  let p = props.patient;

  return <div className="bp4-card bp4-interactive App-patient-list-item">
    <Link to={"/patients/" + p.id}>
      {p.identity.firstName} {p.identity.lastName}
    </Link>

    <p>{p.identity.birthDate}</p>

    <p>{toLuxFormat(p.addresses[0])}</p>

  </div>

}
