import {Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";
import {ReactComponent as Logo} from "../Logo-Becoming-Tech.svg"
import {Link} from "react-router-dom";

export function Menu() {
  return <div className={"bp4-dark"}>
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Logo className={"App-logo"} />
        </NavbarHeading>
        <NavbarDivider />
        <Link to="/patients">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="user" text="Patients" />
        </Link>
        <Link to="/procedures">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="prescription" text="Procedures" />
        </Link>
        <Link to="/doctors">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="heart" text="Doctors" />
        </Link>
        <Link to="/about">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="help" text="About" />
        </Link>
      </NavbarGroup>
    </Navbar>
  </div>
}
