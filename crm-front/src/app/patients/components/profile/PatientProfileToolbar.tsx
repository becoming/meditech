import {Button, ControlGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../../common/components/PageTitle";

interface Props {
  title: string
  patientId: string
}

export function PatientProfileToolbar(props: Props) {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={props.title} backUrl={"/patients"} />
    <Link to={`/patients/${props.patientId}/address/create`}>
      <Button icon="add-location">New address</Button>
    </Link>
  </ControlGroup>

}
