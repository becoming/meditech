import {toLuxFormat} from "../../helpers/AddressHelper";
import {AddressVO} from "../../vo/address/AddressVO";

interface Props {
  value: AddressVO[]
  patientId: string
}

export function AddressBasic(props: Props) {

  if (props.value.length > 0) {
    let value = toLuxFormat(props.value[0])
    return <span className={"App-listing-address"} title={value}>{value}</span>
  }

  return <span className={"App-listing-unknown App-listing-address"}>
    [no-address]
  </span>
}
