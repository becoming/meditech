import {Button, ControlGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../../common/components/PageTitle";

interface Props {
  title: string
  doctorId: string
}

export function DoctorProfileToolbar(props: Props) {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={props.title} backUrl={"/doctors"}/>
    <Link to={`/doctors/${props.doctorId}/address/create`}>
      <Button icon="add-location">New Address</Button>
    </Link>
    <Link to={`/doctors/${props.doctorId}/license/create`}>
      <Button icon="document">New License</Button>
    </Link>
  </ControlGroup>

}
