import {AddressVO} from "../../../common/vo/address/AddressVO";
import {AddressCard} from "../profile/AddressCard";


interface Props {
  value: AddressVO[]
  patientId: string
}

export function AddressList(props: Props) {
  let trs:JSX.Element[] = [];

  props.value.forEach(address => trs.push(<AddressCard address={address} patientId={props.patientId}/>))

  return <div>
    {trs}
  </div>
}
