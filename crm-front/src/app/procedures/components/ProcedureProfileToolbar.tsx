import {Button, ControlGroup} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {PageTitle} from "../../common/components/PageTitle";

interface Props {
  title: string
  procedureId: string
}

export function ProcedureProfileToolbar(props: Props) {

  return <ControlGroup fill={false} vertical={false}>
    <PageTitle value={props.title} backUrl={"/procedures"} />
    <Link to={`/procedures/${props.procedureId}/edit`}>
      <Button icon="edit">Edit</Button>
    </Link>
  </ControlGroup>

}
