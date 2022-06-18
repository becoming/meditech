import {Toolbar} from "./Toolbar";
import {EnvVars} from "./EnvVars";
import {HealthInfo} from "./HealthInfo";

export function AboutPage() {

  return <div className={"App-page-container container"}>

    <div className={"row"}>
      <div className={"col-sm-12"}>
        <Toolbar/>
      </div>
    </div>

    <div className={"App-page-content"}>
      <div className={"row"}>
        <div className={"col-sm-12 col-md-4"}>
          <EnvVars/>
        </div>

        <div className={"col-sm-12 col-md-8"}>
          <HealthInfo/>
        </div>

      </div>
    </div>

  </div>
}
