import {useNavigate} from "react-router-dom";
import {PatientVO} from "../../vo/PatientVO";
import {FullName} from "./FullName";
import {Birthdate} from "./Birthdate";
import {toDateString, toDateString2} from "../../../helpers/DateHelper";
import {AddressBasic} from "./AddressBasic";
import {Created} from "../../../common/components/Created";

interface Props {
  patient: PatientVO
}

export function PatientListItem(props: Props) {
  let patient = props.patient;
  let identity = patient.identity;
  let navigate = useNavigate();

  return <div className="App-patient-list-item" onClick={() => navigate("/patients/" + patient.id)}>
    <Created dateTime={toDateString2(identity.created)} />
    <FullName firstName={identity.firstName} lastName={identity.lastName} />
    <Birthdate date={toDateString(identity.birthDate)} />
    <AddressBasic value={patient.addresses} patientId={patient.id} />
  </div>

}
