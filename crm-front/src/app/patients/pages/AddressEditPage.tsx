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

  const patientId = params.patientId;
  const addressId = params.addressId;

  let [, patientName,] = usePatient(patientId);
  let [address, addressError] = useAddress(addressId);

  const onSave = (updatedAddress: AddressUpdateRequest) => {
    setDisabled(true);

    updatedAddress.addressId = addressId;

    addressService.update(addressId, updatedAddress)
      .subscribe({
        next: (p) => navigate("/patients/" + patientId),
        error: e => {
          setDisabled(false)
          setError(true)
        }
      })
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
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit address for " + patientName} backUrl={"/patients/" + params.patientId}/>

    {form}
  </div>;
}
