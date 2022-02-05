import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";
import {useState} from "react";
import {ProcedureUpdateRequest} from "../vo/ProcedureUpdateRequest";
import {procedureService} from "../ProcedureService";
import {useProcedure} from "../hooks/useProcedure";
import {WarningMessage} from "../../common/components/WarningMessage";
import {ProcedureEditForm} from "../forms/ProcedureEditForm";

export function ProcedureEditPage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const procedureId = params.procedureId;

  let [procedure, procedureError] = useProcedure(procedureId);

  const onSave = (update: ProcedureUpdateRequest) => {
    setDisabled(true);

    update.id = procedureId;

    procedureService.update(procedureId, update)
      .subscribe({
        next: (p) => navigate("/procedures/" + procedureId),
        error: e => {
          setDisabled(false)
          setError(true)
        }
      })
  }

  let form
  if (procedureError) {
    form = <WarningMessage message={"Oh no, cannot find this address"}/>
  } else if (procedure) {
    form = <ProcedureEditForm onUpdate={onSave}
                              disabled={disabled}
                              procedure={procedure}
                              cancelLink={"/procedures/" + procedure.id}
                              error={error}/>
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"Edit procedure"} backUrl={"/procedures/" + params.procedureId}/>

    {form}
  </div>;
}
