import {useEffect, useState} from "react";
import {ListItem} from "../components/listing/ListItem";
import {PatientVO, toPatients} from "../vo/PatientVO";
import {Toolbar} from "../components/Toolbar";
import {patientService} from "../PatientService";
import {UL} from "@blueprintjs/core";

export function PatientsListingPage() {

  let [patients, setPatients] = useState<PatientVO[]>([]);
  let [title, setTitle] = useState<string>("Patients are loading...");

  useEffect(() => {
    patientService.getAll().subscribe({
      next: d => {
        let p = toPatients(d)
        setPatients(p)
        setTitle("Patients")
      }
    });
  }, [])

  let patientsLi: JSX.Element[] = []
  for (const i of patients) {
    patientsLi.push(<ListItem key={i.id} patient={i}/>);
  }

  return <div className={"App-page-container"}>
    <Toolbar title={title} />
    <UL className={"App-patients-ul"}>
      {patientsLi}
    </UL>

  </div>
}
