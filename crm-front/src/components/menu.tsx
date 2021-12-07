import {Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";

export function Menu() {
  return <div className={"bp4-dark"}>
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>TME // CRM Front</NavbarHeading>
        <NavbarDivider />
        <Button className={Classes.MINIMAL + " .bp4-dark"} icon="home" text="Home" />
        <Button className={Classes.MINIMAL} icon="document" text="Files" />
      </NavbarGroup>
    </Navbar>
  </div>
}
