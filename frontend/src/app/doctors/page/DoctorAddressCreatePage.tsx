import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {useState} from "react";
import {addressService} from "../../common/AddressService";
import {AddressRequest} from "../../common/vo/address/AddressRequest";
import {useDoctor} from "../hooks/useDoctor";
import {AddressEditForm} from "../form/AddressEditForm";

export function DoctorAddressCreatePage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const doctorId = params.doctorId;

  let [, doctorName,] = useDoctor(doctorId);

  const onSave = (address: AddressRequest) => {
    setDisabled(true);

    addressService.createForDoctor(doctorId, address)
      .subscribe({
        next: (p) => navigate("/doctors/" + doctorId),
        error: e => {
          setDisabled(false)
          setError(true)
        }
      })
  }
  // 623820f5-612b-409b-925d-3eff8f362021
  return <div className={"App-page-container"}>
    <PageTitle value={"New address for doctor " + doctorName} backUrl={"/doctors/" + params.doctorId}/>

    <AddressEditForm onCreate={onSave}
                     doctorId={params.doctorId}
                     disabled={disabled}
                     error={error}/>
  </div>;
}
