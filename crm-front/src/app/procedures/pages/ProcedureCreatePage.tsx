import {useNavigate} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {useState} from "react";
import {procedureService} from "../ProcedureService";
import {ProcedureRequest} from "../vo/ProcedureRequest";
import {ProcedureEditForm} from "../forms/ProcedureEditForm";

export function ProcedureCreatePage() {

  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const onSave = (request: ProcedureRequest) => {
    setDisabled(true);

    procedureService.create(request)
      .subscribe({
        next: (p) => navigate("/procedures/" + p.id),
        error: e => {
          setDisabled(false)
          setError(true)
        }
      })
  }

  return <div className={"App-page-container"}>
    <PageTitle value={"New procedure"} backUrl={"/procedures"}/>

    <ProcedureEditForm onCreate={onSave}
                       disabled={disabled}
                       cancelLink={"/procedures/"}
                       error={error} />
  </div>;
}
