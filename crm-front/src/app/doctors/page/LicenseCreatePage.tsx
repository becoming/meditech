import {useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {useDoctor} from "../hooks/useDoctor";
import {WarningMessage} from "../../common/components/WarningMessage";

export function DoctorLicenseCreatePage() {

  let params = useParams();

  const doctorId = params.doctorId;

  let [, doctorName,] = useDoctor(doctorId);

  return <div className={"App-page-container"}>
    <PageTitle value={"New license for " + doctorName} backUrl={"/doctors/" + params.doctorId}/>

    <WarningMessage message={"Not implemented"}/>
  </div>;
}
