import {useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";

export function EditIdentity() {

  let params = useParams();

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit identity"} backUrl={"/patients/" + params.patientId}/>

    <p>params.patientId {params.patientId}</p>
    <p>params.identityId {params.identityId}</p>
  </div>;
}
