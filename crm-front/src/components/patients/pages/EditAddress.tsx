import {useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";

export function EditAddress() {

  let params = useParams();

  return <div>
    <PageTitle value={"Edit address"} backUrl={"/patients/" + params.patientId}/>

    <p>params.patientId {params.patientId}</p>
    <p>params.addressId {params.addressId}</p>
  </div>;
}
