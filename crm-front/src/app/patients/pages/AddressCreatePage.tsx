import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {usePatient} from "../hooks/usePatient";
import {useState} from "react";
import {addressService} from "../AddressService";
import {AddressEditForm} from "../components/forms/AddressEditForm";
import {AddressRequest} from "../vo/AddressRequest";

export function AddressCreatePage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const patientId = params.patientId;

  let [, patientName,] = usePatient(patientId);

  const onSave = (address: AddressRequest) => {
    if (patientId) {
      setDisabled(true);

      addressService.createForPatient(patientId, address)
        .subscribe({
          next: (p) => navigate("/patients/" + patientId),
          error: e => {
            setDisabled(false)
            setError(true)
          }
        })
    } else {
      setDisabled(false)
    }

  }
  // 623820f5-612b-409b-925d-3eff8f362021
  return <div className={"App-page-container"}>
    <PageTitle value={"New address for " + patientName} backUrl={"/patients/" + params.patientId}/>

    <AddressEditForm onCreate={onSave}
                       patientId={params.patientId}
                       disabled={disabled}
                       error={error} />
  </div>;
}
