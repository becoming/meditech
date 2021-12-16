import {Classes, Button, Intent, Card, Elevation} from "@blueprintjs/core";
import {Classes as Classes2, Placement, Popover2} from "@blueprintjs/popover2";

export function BackendInfo() {
  return <Popover2
    interactionKind="click"
    // popoverClassName={Classes2.POPOVER2_CONTENT_SIZING}
    placement={"auto"}
    content={
      <Card interactive={true} elevation={Elevation.TWO} style={{width: 200}}>
        <span>Card heading</span>
        <p>Card content</p>
        <Button className={Classes2.POPOVER2_DISMISS} text="Fine" />
      </Card>
    }
  >
    <Button intent={Intent.PRIMARY}
            className={Classes.MINIMAL + " .bp4-dark"}
            icon="console" />
  </Popover2>
}
