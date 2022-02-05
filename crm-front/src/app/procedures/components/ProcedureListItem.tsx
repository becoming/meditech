import {useNavigate} from "react-router-dom";
import {ProcedureVO} from "../vo/ProcedureVO";
import {Name} from "./Name";
import {Created} from "../../common/components/Created";
import {toDateString2} from "../../helpers/DateHelper";
import {Description} from "./Description";

interface Props {
  procedure: ProcedureVO
}

export function ProcedureListItem(props: Props) {
  let procedure = props.procedure;
  let navigate = useNavigate();

  return <div className="App-patient-list-item" onClick={() => navigate("/procedures/" + procedure.id)}>
    <Created altPrefix={"Procedure version date"} dateTime={toDateString2(procedure.versionDate)} />
    <Name value={procedure.name} />
    <Description value={procedure.description} />
  </div>

}
