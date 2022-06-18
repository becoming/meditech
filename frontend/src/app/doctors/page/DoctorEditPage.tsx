import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {WarningMessage} from "../../common/components/WarningMessage";
import {useIdentity} from "../../common/hooks/useIdentity";
import {DoctorEditForm} from "../form/DoctorEditForm";

export function DoctorEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  let [identity, identityName, error] = useIdentity(params.identityId)

  const onSave = () => {
    navigate("/doctors/" + params.doctorId)
  }

  let content = <span/>;
  let title = "Working.."

  if (identity && params.doctorId) {
    content = <DoctorEditForm identity={identity} doctorId={params.doctorId} onSave={onSave}/>
    title = "Edit " + identityName + "'s identity"
  } else if (error) {
    content = <WarningMessage message={error} backUrl={"/doctors"}/>
    title = identityName
  }

  return <div className={"App-page-container"}>
    <PageTitle value={title} backUrl={"/doctors/" + params.doctorId}/>
    {content}
  </div>;
}
