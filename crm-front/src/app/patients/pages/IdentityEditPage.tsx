import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {usePatientIdentity} from "../hooks/useIdentity";
import {WarningMessage} from "../../common/components/WarningMessage";
import {IdentityEditForm} from "../forms/IdentityEditForm";

export function IdentityEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  let [identity, identityName, error] = usePatientIdentity(params.patientId, params.identityId)

  const onSave = () => {
    navigate("/patients/" + params.patientId)
  }

  let content = <span />;
  let title = "Working.."

  if(identity && params.patientId) {
    content = <IdentityEditForm identity={identity} patientId={params.patientId} onSave={onSave} />
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
