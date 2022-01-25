import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {useState} from "react";
import {useAddress} from "../hooks/useAddress";
import {AddressEditForm} from "../components/forms/AddressEditForm";
import {WarningMessage} from "../components/WarningMessage";
import {ProcedureUpdateRequest} from "../vo/ProcedureUpdateRequest";
import {procedureService} from "../ProcedureService";

export function ProcedureEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  let [procedure, procedureError] = useAddress(params.procedureId);

  const onSave = (update: ProcedureUpdateRequest) => {
    if (params.procedureId) {
      setDisabled(true);

      update.id = params.procedureId;

      procedureService.update(update)
        .subscribe({
          next: (p) => navigate("/procedures/" + update.id),
          error: e => {
            setDisabled(false)
            setError(true)
          }
        })
    } else {
      setDisabled(false)
    }
  }

  let form
  if(procedureError) {
    form = <WarningMessage message={"Oh no, cannot find this address"}/>
  } else if(procedure) {
    form = <AddressEditForm onUpdate={onSave}
                            patientId={params.procedureId}
                            disabled={disabled}
                            address={procedure}
                            error={error} />
  } else {
    form = <span>Loading procedure...</span>
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit procedure " + patientName} backUrl={"/procedures/" + params.procedureId}/>

    {form}
  </div>;
}
