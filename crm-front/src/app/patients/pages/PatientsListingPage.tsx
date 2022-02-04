import {useEffect, useState} from "react";
import {PatientListItem} from "../components/listing/PatientListItem";
import {PatientVO, toPatients} from "../vo/PatientVO";
import {PatientsListingToolbar} from "../components/patient/PatientsListingToolbar";
import {patientService} from "../PatientService";
import {UL} from "@blueprintjs/core";

export function PatientsListingPage() {

  let [patients, setPatients] = useState<PatientVO[]>([]);

  useEffect(() => {
    patientService.findAll()
      .subscribe({
        next: d => setPatients(toPatients(d))
      });
  }, [])

  let patientsLi: JSX.Element[] = []
  for (const i of patients) {
    patientsLi.push(<PatientListItem key={i.id} patient={i}/>);
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <PatientsListingToolbar />
      </div>
    </div>

    <div className={"App-page-content"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <UL className={"App-patients-ul"}>
            {patientsLi}
          </UL>
        </div>
      </div>
    </div>

  </div>
}
