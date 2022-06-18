import {useParams} from "react-router-dom";
import {WarningMessage} from "../../common/components/WarningMessage";
import {useDoctor} from "../hooks/useDoctor";
import {DoctorProfileToolbar} from "../components/profile/DoctorProfileToolbar";
import {DoctorWidgets} from "../components/profile/DoctorWidgets";

export function DoctorProfilePage() {

  let params = useParams();
  let [doctor, doctorName, error] = useDoctor(params.doctorId);
  let doctorId = params.doctorId || ""

  let content = <span/>;

  if (error) {
    return <div className={"App-page-container container"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <WarningMessage message={error} backUrl={"/doctors"}/>
        </div>
      </div>
    </div>
  }

  if (doctor) {
    content = <DoctorWidgets doctor={doctor}/>
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <DoctorProfileToolbar title={doctorName} doctorId={doctorId}/>
      </div>
    </div>

    {content}

  </div>
}
