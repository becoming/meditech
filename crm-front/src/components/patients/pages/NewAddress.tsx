import {useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";

export function NewAddress() {

  let params = useParams();

  return <div>
    <PageTitle value={"New address"} backUrl={"/patients/" + params.patientId}/>

    <p>params.patientId {params.patientId}</p>
  </div>;
}
