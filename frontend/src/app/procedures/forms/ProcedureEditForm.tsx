import {useState} from "react";
import {Card} from "@blueprintjs/core";
import {ProcedureRequest} from "../vo/ProcedureRequest";
import {ProcedureUpdateRequest} from "../vo/ProcedureUpdateRequest";
import {FormInput} from "../../common/components/form/FormInput";
import {FormActionButtons} from "../../common/components/form/FormActionButtons";
import {ProcedureVO} from "../vo/ProcedureVO";

interface Props {
  onUpdate?: (address: ProcedureUpdateRequest) => void;
  onCreate?: (address: ProcedureRequest) => void;
  procedure?: ProcedureVO
  disabled: boolean
  error: boolean
  cancelLink: string
}

export function ProcedureEditForm(props: Props) {

  let procedure = props.procedure
  const [name, setName] = useState(procedure?.name);
  const [description, setDescription] = useState(procedure?.description);
  const [price, setPrice] = useState(procedure?.price);
  const [currency, setCurrency] = useState(procedure?.currency);

  const fillAddress = (): ProcedureRequest => {
    let update: ProcedureRequest = {}
    update.name = name
    update.description = description
    update.price = price
    update.currency = currency

    return update
  }

  const onSave = () => {
    if (props.onUpdate) {
      if (procedure) {
        props.onUpdate(fillAddress())
      }
    }

    if (props.onCreate) {
      props.onCreate(fillAddress())
    }
  }

  return <div className={"App-form"}>
    <Card>
      <FormInput htmlId={"name"}
                 label={"Name"}
                 placeholder={"Longoscopie"}
                 disabled={props.disabled}
                 value={name}
                 onChange={setName}/>

      <FormInput htmlId={"description"}
                 label={"Description"}
                 placeholder={"It helps to find the longest in the hood, for maximum pleasure."}
                 disabled={props.disabled}
                 value={description}
                 onChange={setDescription}/>

      <FormInput htmlId={"price"}
                 label={"Price"}
                 placeholder={"69"}
                 disabled={props.disabled}
                 value={price}
                 onChange={setPrice}/>

      <FormInput htmlId={"currency"}
                 label={"Currency"}
                 placeholder={"EUR"}
                 disabled={props.disabled}
                 value={currency}
                 onChange={setCurrency}/>

      <FormActionButtons disabled={props.disabled}
                         cancelLink={props.cancelLink}
                         onSave={onSave}
                         saveLabel={"Save procedure"}
                         error={props.error}/>

    </Card>
  </div>
}
