import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {usePatient} from "../hooks/usePatient";
import {useState} from "react";
import {addressService} from "../AddressService";
import {useAddress} from "../hooks/useAddress";
import {AddressUpdateRequest} from "../vo/AddressUpdateRequest";
import {AddressEditForm} from "../components/forms/AddressEditForm";
import {WarningMessage} from "../components/WarningMessage";

export function AddressEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  let [, patientName,] = usePatient(params.patientId);
  let [address, addressError] = useAddress(params.patientId, params.addressId);

  const onSave = (addressUpdate: AddressUpdateRequest) => {
    if (params.patientId && params.addressId) {
      setDisabled(true);

      addressUpdate.addressId = params.addressId;

      addressService.update(params.addressId, addressUpdate)
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

  let form
  if(addressError) {
    form = <WarningMessage message={"Oh no, cannot find this address"}/>
  } else if(address) {
    form = <AddressEditForm onUpdate={onSave}
                            patientId={params.patientId}
                            disabled={disabled}
                            address={address}
                            error={error} />
  } else {
    form = <span>Loading address...</span>
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit address for " + patientName} backUrl={"/patients/" + params.patientId}/>

    {form}
  </div>;
}
