import {toLuxFormat} from "../../../../helpers/AddressHelper";
import {PatientAddressView} from "../../vo/PatientAddressView";

interface Props {
  value: PatientAddressView[]
}

export function Address(props: Props) {

  let value = "[no-address]";
  let extraClass = "App-listing-unknown"

  if(props.value && props.value.length > 0) {
    value = toLuxFormat(props.value[0])
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-address"} title={value}>{value}</span>
}
