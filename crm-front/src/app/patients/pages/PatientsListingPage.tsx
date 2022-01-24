import {useEffect, useState} from "react";
import {PatientListItem} from "../components/listing/PatientListItem";
import {PatientVO, toPatients} from "../vo/PatientVO";
import {PatientsListingToolbar} from "../components/patient/PatientsListingToolbar";
import {patientService} from "../PatientService";
import {UL} from "@blueprintjs/core";
import {EnvVars} from "../../about/EnvVars";
import {HealthInfo} from "../../about/HealthInfo";

export function PatientsListingPage() {

  let [patients, setPatients] = useState<PatientVO[]>([]);
  let [title, setTitle] = useState<string>("Patients are loading...");

  useEffect(() => {
    patientService.getAll().subscribe({
      next: d => {
        setPatients(toPatients(d))
        setTitle("Patients")
      }
    });
  }, [])

  let patientsLi: JSX.Element[] = []
  for (const i of patients) {
    patientsLi.push(<PatientListItem key={i.id} patient={i}/>);
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <PatientsListingToolbar title={title} />
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
