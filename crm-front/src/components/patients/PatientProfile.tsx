import {PageTitle} from "../PageTitle";

export function PatientProfile() {

  return <div className={"App-page-container"}>
    <PageTitle value={"John Doe"} backUrl={"/patients"} />
  </div>
}
