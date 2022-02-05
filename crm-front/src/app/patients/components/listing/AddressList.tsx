import {PatientAddressVO} from "../../vo/PatientAddressVO";
import {AddressCard} from "../profile/AddressCard";


interface Props {
  value: PatientAddressVO[]
  patientId: string
}

export function AddressList(props: Props) {
  let trs:JSX.Element[] = [];

  props.value.forEach(address => trs.push(<AddressCard address={address} patientId={props.patientId}/>))

  return <div>
    {trs}
  </div>
}
