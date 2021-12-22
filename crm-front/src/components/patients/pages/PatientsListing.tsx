import {useEffect, useState} from "react";
import {ListItem} from "../components/ListItem";
import {Patient} from "../vo/Patient";
import {Toolbar} from "../components/Toolbar";
import {patientService} from "../PatientService";
import {UL} from "@blueprintjs/core";

export function PatientsListing() {

  let [patients, setPatients] = useState<Patient[]>([]);
  let [title, setTitle] = useState<string>("Patients are loading...");

  useEffect(() => {
    patientService.getAll().subscribe({
      next: d => {
        setPatients(d)
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
