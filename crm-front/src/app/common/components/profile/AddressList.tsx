import {AddressVO} from "../../vo/address/AddressVO";
import {AddressCard} from "./AddressCard";


interface Props {
  value: AddressVO[]
  patientId?: string
  doctorId?: string
}

export function AddressList(props: Props) {
  let trs:JSX.Element[] = [];

  props.value.forEach(address => trs.push(
    <AddressCard address={address}
                 patientId={props.patientId}
                 doctorId={props.patientId}/>
  ))

  return <div>
    {trs}
  </div>
}
