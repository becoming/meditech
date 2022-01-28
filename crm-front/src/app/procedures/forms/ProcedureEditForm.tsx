import {useState} from "react";
import {Card} from "@blueprintjs/core";
import {basicProcedureReq, ProcedureRequest} from "../vo/ProcedureRequest";
import {basicProcedureEditReq, ProcedureUpdateRequest} from "../vo/ProcedureUpdateRequest";
import {FormInput} from "../../patients/components/FormInput";
import {FormActionButtons} from "../../patients/components/FormActionButtons";
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

  const fillAddress = function <T extends ProcedureRequest>(update: T): T {
    // @ts-ignore
    update.name = name
    update.description = description
    update.price = price
    update.currency = currency

    return update
  }

  const onSave = () => {

    if (props.onUpdate) {
      if(procedure) {
        let na = basicProcedureEditReq(procedure.id)
        props.onUpdate(fillAddress(na))
      }
    }

    if (props.onCreate) {
      let na = basicProcedureReq()
      props.onCreate(fillAddress(na))
    }
  }

  return <div className={"App-form"}>
    <Card>
      <FormInput htmlId={"name"}
                 label={"Name"}
                 placeholder={"Longoscopie"}
                 disabled={props.disabled}
                 onChange={setName}/>

      <FormInput htmlId={"description"}
                 label={"Description"}
                 placeholder={"It helps to find the longest in the hood, for maximum pleasure."}
                 disabled={props.disabled}
                 onChange={setDescription}/>

      <FormInput htmlId={"price"}
                 label={"Price"}
                 placeholder={"69"}
                 disabled={props.disabled}
                 onChange={setPrice}/>

      <FormInput htmlId={"currency"}
                 label={"Currency"}
                 placeholder={"EUR"}
                 disabled={props.disabled}
                 onChange={setCurrency}/>

      <FormActionButtons disabled={props.disabled}
                         cancelLink={props.cancelLink}
                         onSave={onSave}
                         saveLabel={"Save address"}
                         error={props.error}/>

    </Card>
  </div>
}
