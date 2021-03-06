import {Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";
import {ReactComponent as Logo} from "../../Logo-Becoming-Tech.svg"
import {Link} from "react-router-dom";
import {AboutButton} from "../about/AboutButton";

export function Menu() {
  return <div>
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Logo className={"App-logo"}/>
        </NavbarHeading>

        <NavbarDivider/>

        <Link to="/visits">
          <Button className={Classes.MINIMAL} icon="calendar" text="Visits"/>
        </Link>
        <Link to="/patients">
          <Button className={Classes.MINIMAL} icon="people" text="Patients"/>
        </Link>
        <Link to="/procedures">
          <Button className={Classes.MINIMAL} icon="diagnosis" text="Procedures"/>
        </Link>
        <Link to="/doctors">
          <Button className={Classes.MINIMAL} icon="heart" text="Doctors"/>
        </Link>
      </NavbarGroup>

      <NavbarGroup align={Alignment.RIGHT}>
        <Link to="/about">
          <AboutButton/>
        </Link>
      </NavbarGroup>
    </Navbar>
  </div>
}
