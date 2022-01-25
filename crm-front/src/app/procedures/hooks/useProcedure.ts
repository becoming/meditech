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
      sub = procedureService.getById(procedureId).subscribe({
        next: value => {
          setProcedure(toProcedure(value))
          setError(null)
        },
        error: err => {
          setError("I cannot load this procedure. What a bummer..")
          console.error(err)
        }
      });
    } else {
      let str = `Procedure ID not provided, procedureId: ${procedureId}`
      setError(str)
      console.error(str)
    }

    return () => {
      if (sub) sub.unsubscribe()
    }
  }, [procedureId])

  return [procedure, error]
}
