import {FormInput} from "../../common/components/FormInput";
import {FormActionButtons} from "../../common/components/FormActionButtons";
import {useState} from "react";
import {AddressRequest} from "../vo/AddressRequest";
import {AddressUpdateRequest} from "../vo/AddressUpdateRequest";
import {Card} from "@blueprintjs/core";

interface Props {
  onUpdate?: (address: AddressUpdateRequest) => void;
  onCreate?: (address: AddressRequest) => void;
  address?: AddressRequest
  disabled: boolean
  patientId?: string // TODO, make this value non ?
  error: boolean
}

export function AddressEditForm(props: Props) {

  let address = props.address
  const [number, setNumber] = useState(address?.number);
  const [street, setStreet] = useState(address?.street);
  const [zipCode, setZipCode] = useState(address?.zipCode);
  const [city, setCity] = useState(address?.city);
  const [region, setRegion] = useState(address?.region);
  const [department, setDepartment] = useState(address?.department);
  const [country, setCountry] = useState(address?.country);

  const fillAddress = function <T extends AddressRequest>(newAddress: T): T {
    newAddress.city = city
    newAddress.country = country
    newAddress.department = department
    newAddress.number = number
    newAddress.region = region
    newAddress.street = street
    newAddress.zipCode = zipCode

    return newAddress
  }

  const onSave = () => {

    if (props.onUpdate) {
      let na: AddressUpdateRequest = {addressId: ""}
      props.onUpdate(fillAddress(na))
    }

    if (props.onCreate) {
      let na: AddressRequest = {}
      props.onCreate(fillAddress(na))
    }
  }

  return <div className={"App-form"}>
    <Card>
      <FormInput htmlId={"number"}
                 label={"Number"}
                 placeholder={"69/A"}
                 disabled={props.disabled}
                 value={number}
                 onChange={setNumber}/>

      <FormInput htmlId={"street"}
                 label={"Street"}
                 placeholder={"Pleasure street"}
                 disabled={props.disabled}
                 value={street}
                 onChange={setStreet}/>

      <FormInput htmlId={"zipCode"}
                 label={"Zip Code"}
                 placeholder={"L-OV3"}
                 disabled={props.disabled}
                 value={zipCode}
                 onChange={setZipCode}/>

      <FormInput htmlId={"city"}
                 label={"City"}
                 placeholder={"City of Love"}
                 disabled={props.disabled}
                 value={city}
                 onChange={setCity}/>

      <FormInput htmlId={"region"}
                 label={"Region"}
                 placeholder={"Fellange"}
                 disabled={props.disabled}
                 value={region}
                 onChange={setRegion}/>

      <FormInput htmlId={"department"}
                 label={"Department"}
                 placeholder={"BDSM"}
                 disabled={props.disabled}
                 value={department}
                 onChange={setDepartment}/>

      <FormInput htmlId={"country"}
                 label={"Country"}
                 placeholder={"Sexembourg"}
                 disabled={props.disabled}
                 value={country}
                 onChange={setCountry}/>

      <FormActionButtons disabled={props.disabled}
                         cancelLink={"/patients/" + props.patientId}
                         onSave={onSave}
                         saveLabel={"Save address"}
                         error={props.error}/>

    </Card>
  </div>
}
