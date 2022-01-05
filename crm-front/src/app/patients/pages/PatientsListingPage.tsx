import {useEffect, useState} from "react";
import {ListItem} from "../components/listing/ListItem";
import {PatientVO, toPatients} from "../vo/PatientVO";
import {Toolbar} from "../components/Toolbar";
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
    patientsLi.push(<ListItem key={i.id} patient={i}/>);
  }

  return <div className={"App-page-container container"}>
    <div className={"row"}>
      <div className={"col-sm-12"}>
        <Toolbar title={title} />
      </div>
    </div>

    <div className={"App-page-content"}>
      <div className={"row"}>
        <div className={"col-sm-12"}>
          <UL className={"App-page-content App-patients-ul"}>
            {patientsLi}
          </UL>
        </div>
      </div>
    </div>

  </div>
}
