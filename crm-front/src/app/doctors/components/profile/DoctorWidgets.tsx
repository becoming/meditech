import {AddressList} from "../../../common/components/profile/AddressList";
import {Card} from "@blueprintjs/core";
import {DoctorVO, hasAddress} from "../../vo/DoctorVO";
import {EditLink} from "../../../common/components/EditLink";
import {DoctorIdentity} from "./DoctorIdentity";

interface Props {
  doctor: DoctorVO
}

export function DoctorWidgets(props: Props) {

  let doctor = props.doctor
  let addresses

  if (hasAddress(doctor)) {
    addresses = <AddressList value={doctor.addresses} doctorId={doctor.id}/>
  } else {
    addresses =
      <Card>
        <span>We have no addresses for this doctor</span>
        <EditLink link={`/doctors/${props.doctor.id}/address/create`}
                  value={"New Address"}/>
      </Card>
  }

  return <div className={"App-page-content"}>
    <div className={"row"}>
      <div className={"col-sm-12 col-md-4"}>
        <DoctorIdentity identity={doctor.identity}
                         doctorId={doctor.id}/>

        {addresses}
      </div>
      <div className={"col-sm-12 col-md-8"}>
      </div>
    </div>

  </div>
}
