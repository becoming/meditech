import {Button, Card, Classes, Elevation, Intent} from "@blueprintjs/core";
import {Classes as Classes2, Popover2} from "@blueprintjs/popover2";

export function BackendInfo() {



  return <Popover2 interactionKind="click" placement={"auto"}
    content={
      <Card interactive={true} elevation={Elevation.TWO} style={{width: 200}}>
        <span>Card heading</span>
        <p>Card content</p>
        <Button className={Classes2.POPOVER2_DISMISS} text="Fine" />
      </Card>
    }
  >
    <Button intent={Intent.PRIMARY}
            className={Classes.MINIMAL}
            icon="console" />
  </Popover2>
}
