import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {usePatient} from "../hooks/usePatient";
import {useState} from "react";
import {addressService} from "../../common/AddressService";
import {AddressUpdateRequest} from "../../common/vo/address/AddressUpdateRequest";
import {AddressEditForm} from "../forms/AddressEditForm";
import {WarningMessage} from "../../common/components/WarningMessage";
import {useAddress} from "../../common/hooks/useAddress";

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
  if (addressError) {
    form = <WarningMessage message={"Oh no, cannot find this address"}/>
  } else if (address) {
    form = <AddressEditForm onUpdate={onSave}
                            patientId={params.patientId}
                            disabled={disabled}
                            address={address}
                            error={error}/>
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit address for patient " + patientName} backUrl={"/patients/" + params.patientId}/>

    {form}
  </div>;
}
