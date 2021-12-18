import {useEffect} from "react";
import {httpHelperNoAuth} from "./helper/HttpHelper";

export function Patients() {

  useEffect(() => {

    httpHelperNoAuth
      .get<Object>('/api/v1/patients')
      .next((value: Object) => console.log(value));
  })

  return <div>
    <h1 className="bp4-heading">Patients</h1>

  </div>
}
