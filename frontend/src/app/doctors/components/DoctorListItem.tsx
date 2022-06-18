import {useNavigate} from "react-router-dom";
import {Created} from "../../common/components/listing/Created";
import {toDateString2} from "../../common/helpers/DateHelper";
import {DoctorVO} from "../vo/DoctorVO";
import {FullName} from "../../common/components/listing/FullName";

interface Props {
  doctor: DoctorVO
}

export function DoctorListItem(props: Props) {
  let doctor = props.doctor;
  let navigate = useNavigate();

  return <div className="App-doctor-list-item" onClick={() => navigate("/doctors/" + doctor.id)}>
    <Created altPrefix={"Doctor creation date"} dateTime={toDateString2(doctor.identity.created)}/>
    <FullName firstName={doctor.identity.firstName} lastName={doctor.identity.lastName}/>
  </div>

}
