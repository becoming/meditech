import {useEffect, useState} from "react";
import {httpHelperNoAuth} from "../helper/HttpHelper";
import {UL} from "@blueprintjs/core";
import {ListItem} from "./ListItem";
import {PageTitle} from "../PageTitle";
import {Patient} from "./vo/Patient";
import {Toolbar} from "./Toolbar";

export function Patients() {

  let [items, setData] = useState<Patient[]>([]);

  useEffect(() => {
    httpHelperNoAuth
      .get<Object>('/api/v1/patients')
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
