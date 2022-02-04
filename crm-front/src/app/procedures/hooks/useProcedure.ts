import {useEffect, useState} from "react";
import {Subscription} from "rxjs";
import {ProcedureVO, toProcedure} from "../vo/ProcedureVO";
import {procedureService} from "../ProcedureService";

export function useProcedure(procedureId?: string): [ProcedureVO|undefined, any|null] {
  let [procedure, setProcedure] = useState<ProcedureVO>();
  let [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let sub:Subscription;

    if(procedureId) {
      sub = procedureService.findById(procedureId).subscribe({
        next: value => {
          setProcedure(toProcedure(value))
          setError(null)
        },
        error: err => {
          setError("I cannot load this procedure. What a bummer..")
        }
      });
    } else {
      setError(`Procedure ID not provided, procedureId: ${procedureId}`)
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [procedureId])

  return [procedure, error]
}
