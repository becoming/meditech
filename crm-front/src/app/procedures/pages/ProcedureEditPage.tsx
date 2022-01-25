import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {useState} from "react";
import {ProcedureUpdateRequest} from "../vo/ProcedureUpdateRequest";
import {procedureService} from "../ProcedureService";
import {useProcedure} from "../hooks/useProcedure";
import {WarningMessage} from "../../patients/components/WarningMessage";
import {ProcedureEditForm} from "../forms/ProcedureEditForm";

export function ProcedureEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  let [procedure, procedureError] = useProcedure(params.procedureId);

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
    form = <ProcedureEditForm onUpdate={onSave}
                            disabled={disabled}
                            procedure={procedure}
                            error={error} />
  } else {
    form = <span>Loading procedure...</span>
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit procedure"} backUrl={"/procedures/" + params.procedureId}/>

    {form}
  </div>;
}
