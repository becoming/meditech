import {useEffect, useState} from "react";
import {httpHelperNoAuth} from "../helper/HttpHelper";
import {UL} from "@blueprintjs/core";
import {ListItem} from "./ListItem";
import {Patient} from "./vo/Patient";
import {Toolbar} from "./Toolbar";
import {patientService} from "./PatientService";

export function Patients() {

  let [items, setData] = useState<Patient[]>([]);

  useEffect(() => {
    patientService.getAll()
      .next((value: Patient[]) => setData(value));
  })

  let patients: JSX.Element[] = []
  items.forEach(i => patients.push(<ListItem patient={i} />))

  return <div className={"App-page-container"}>
    {/*<PageTitle value={"Patients"} />*/}
    <Toolbar />

    <UL className={"App-patients"}>
      <li>
        {patients}
      </li>
    </UL>

  </div>
}
