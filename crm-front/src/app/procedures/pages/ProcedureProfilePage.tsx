import {useEffect, useState} from "react";
import {ProcedureVO, toProcedure} from "../vo/ProcedureVO";
import {procedureService} from "../ProcedureService";
import {ProcedureProfileToolbar} from "../components/ProcedureProfileToolbar";
import {useParams} from "react-router-dom";
import {toDateString2} from "../../helpers/DateHelper";

export function ProceduresProfilePage() {
  let [procedure, setProcedure] = useState<ProcedureVO>();
  let params = useParams();

  useEffect(() => {
    procedureService.findById(params.procedureId)
      .subscribe({
        next: d => setProcedure(toProcedure(d))
      });
  }, [])

  if(procedure) {
    return <div className={"App-page-container container"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <ProcedureProfileToolbar title={procedure.name} procedureId={procedure?.id}/>
        </div>
      </div>

      <p className={"App-page-content"}>
        <h3>Price</h3>
        {procedure.price} {procedure.currency}
      </p>

      <p className={"App-page-content"}>
        <h3>Version</h3>
        {procedure.version}, created on {toDateString2(procedure.versionDate)}
      </p>

      <p className={"App-page-content"}>
        <h3>Description</h3>
        {procedure.description}
      </p>

    </div>
  }

  return <span/>
}
