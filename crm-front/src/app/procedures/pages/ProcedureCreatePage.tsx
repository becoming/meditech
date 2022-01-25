import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {usePatient} from "../hooks/usePatient";
import {useState} from "react";
import {addressService} from "../AddressService";
import {AddressCreateRequest} from "../vo/AddressCreateRequest";
import {AddressEditForm} from "../components/forms/AddressEditForm";

export function ProcedureCreatePage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  let [, patientName,] = usePatient(params.patientId);

  const onSave = (address: AddressCreateRequest) => {
    if (params.patientId) {
      setDisabled(true);

      address.patientId = params.patientId

      addressService.create(address)
        .subscribe({
          next: (p) => navigate("/patients/" + p.id),
          error: e => {
            setDisabled(false)
            setError(true)
          }
        })
    } else {
      setDisabled(false)
    }

  }

  return <div className={"App-page-container"}>
    <PageTitle value={"New address for " + patientName} backUrl={"/patients/" + params.patientId}/>

    <AddressEditForm onCreate={onSave}
                       patientId={params.patientId}
                       disabled={disabled}
                       error={error} />
  </div>;
}
