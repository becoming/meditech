import {useEffect, useState} from "react";
import {ListItem} from "./ListItem";
import {Patient} from "./vo/Patient";
import {Toolbar} from "./Toolbar";
import {patientService} from "./PatientService";
import {UL} from "@blueprintjs/core";

export function Patients() {

  let [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    patientService.getAll().subscribe(d => setPatients(d));
  }, [])

  let patientsLi: JSX.Element[] = []
  for (const i of patients) {
    patientsLi.push(<ListItem key={i.id} patient={i}/>);
  }

  return <div className={"App-page-container"}>
    <Toolbar />
    <UL className={"App-patients-ul"}>
      {patientsLi}
    </UL>

  </div>
}
