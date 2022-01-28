import {useNavigate, useParams} from "react-router-dom";
import {PageTitle} from "../../PageTitle";
import {useState} from "react";
import {procedureService} from "../ProcedureService";
import {ProcedureRequest} from "../vo/ProcedureRequest";
import {ProcedureEditForm} from "../forms/ProcedureEditForm";

export function ProcedureCreatePage() {

  let params = useParams();
  let navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const onSave = (request: ProcedureRequest) => {
    if (params.patientId) {
      setDisabled(true);

      procedureService.create(request)
        .subscribe({
          next: (p) => navigate("/patients/" + p.id),
          error: e => {
            setDisabled(false)
            setError(true)
          }
        })
    } else {
      setDisabled(false)
    }

  }

  return <div className={"App-page-container"}>
    <PageTitle value={"New procedure"} backUrl={"/procedures"}/>

    <ProcedureEditForm onCreate={onSave}
                       disabled={disabled}
                       cancelLink={"/procedures/"}
                       error={error} />
  </div>;
}
