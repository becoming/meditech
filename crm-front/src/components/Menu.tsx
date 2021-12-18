import {Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";
import {ReactComponent as Logo} from "../Logo-Becoming-Tech.svg"
import {Link} from "react-router-dom";

export function Menu() {
  return <div>
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Logo className={"App-logo"} />
        </NavbarHeading>
        <NavbarDivider />
        <Link to="/patients">
          <Button className={Classes.MINIMAL} icon="people" text="Patients" />
        </Link>
        <Link to="/procedures">
          <Button className={Classes.MINIMAL} icon="diagnosis" text="Procedures" />
        </Link>
        <Link to="/doctors">
          <Button className={Classes.MINIMAL} icon="heart" text="Doctors" />
        </Link>
      </NavbarGroup>

      <NavbarGroup align={Alignment.RIGHT}>
        <Link to="/about">
          <Button className={Classes.MINIMAL} icon="info-sign" text="About" />
        </Link>
      </NavbarGroup>
    </Navbar>
  </div>
}
