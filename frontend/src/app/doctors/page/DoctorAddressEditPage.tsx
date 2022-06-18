import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {useState} from "react";
import {addressService} from "../../common/AddressService";
import {AddressUpdateRequest} from "../../common/vo/address/AddressUpdateRequest";
import {WarningMessage} from "../../common/components/WarningMessage";
import {useAddress} from "../../common/hooks/useAddress";
import {useDoctor} from "../hooks/useDoctor";
import {AddressEditForm} from "../form/AddressEditForm";

export function DoctorAddressEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const doctorId = params.doctorId;
  const addressId = params.addressId;

  let [, patientName,] = useDoctor(doctorId);
  let [address, addressError] = useAddress(addressId);

  const onSave = (updatedAddress: AddressUpdateRequest) => {
    setDisabled(true);

    updatedAddress.addressId = addressId;

    addressService.update(addressId, updatedAddress)
      .subscribe({
        next: (p) => navigate("/doctors/" + doctorId),
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
                            doctorId={params.doctorId}
                            disabled={disabled}
                            address={address}
                            error={error}/>
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit address for doctor " + patientName} backUrl={"/doctors/" + doctorId}/>

    {form}
  </div>;
}
