import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {usePatientIdentity} from "../hooks/useIdentity";
import {PatientIdentityVO} from "../vo/PatientIdentityVO";
import {WarningMessage} from "../components/WarningMessage";
import {EditIdentityForm} from "../components/forms/EditIdentityForm";

export function IdentityEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  let [identity, identityName, error] = usePatientIdentity(params.patientId, params.identityId)

  const onSave = (ignored: PatientIdentityVO) => {
    navigate("/patients/" + params.patientId)
  }

  let content = <span />;
  let title = "Working.."

  if(identity && params.patientId) {
    content = <EditIdentityForm identity={identity} patientId={params.patientId} onSave={onSave} />
    title = "Edit " + identityName + "'s identity"
  } else if(error) {
    content = <WarningMessage message={error} backUrl={"/patients"} />
    title = identityName
  }

  return <div className={"App-page-container"}>
    <PageTitle value={title} backUrl={"/patients/" + params.patientId}/>
    {content}
  </div>;
}
