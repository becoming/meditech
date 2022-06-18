import {ProceduresListingToolbar} from "../components/ProceduresListingToolbar";
import {useEffect, useState} from "react";
import {ProcedureVO, toProcedures} from "../vo/ProcedureVO";
import {procedureService} from "../ProcedureService";
import {UL} from "@blueprintjs/core";
import {ProcedureListItem} from "../components/ProcedureListItem";

export function ProceduresListingPage() {
  let [procedures, setProcedures] = useState<ProcedureVO[]>([]);

  useEffect(() => {
    procedureService.findAll()
      .subscribe({
        next: d => setProcedures(toProcedures(d))
      });
  }, [])

  let proceduresLi: JSX.Element[] = []
  for (const i of procedures) {
    proceduresLi.push(<ProcedureListItem key={i.id} procedure={i}/>);
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <ProceduresListingToolbar/>
      </div>
    </div>

    <div className={"App-page-content"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <UL className={"App-patients-ul"}>
            {proceduresLi}
          </UL>
        </div>
      </div>
    </div>

  </div>
}
