import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  PopoverInteractionKind,
  PopoverPosition,
  PopperBoundary,
  PopperModifiers
} from "@blueprintjs/core";
import {ReactComponent as Logo} from "../Logo-Becoming-Tech.svg"
import {Link} from "react-router-dom";
import {BackendInfo} from "./BackendInfo";

export interface IPopoverExampleState {
  boundary?: PopperBoundary;
  canEscapeKeyClose?: boolean;
  exampleIndex?: number;
  hasBackdrop?: boolean;
  inheritDarkTheme?: boolean;
  interactionKind?: PopoverInteractionKind;
  isOpen?: boolean;
  minimal?: boolean;
  modifiers?: PopperModifiers;
  position?: PopoverPosition;
  sliderValue?: number;
  usePortal?: boolean;
}

const popOverState: IPopoverExampleState = {
  boundary: "viewport",
  canEscapeKeyClose: true,
  exampleIndex: 0,
  hasBackdrop: false,
  inheritDarkTheme: true,
  interactionKind: PopoverInteractionKind.CLICK,
  isOpen: false,
  minimal: false,
  modifiers: {
    arrow: { enabled: true },
    flip: { enabled: true },
    keepTogether: { enabled: true },
    preventOverflow: { enabled: true },
  },
  position: "auto",
  sliderValue: 5,
  usePortal: true,
};

export function Menu() {
  return <div className={"bp4-dark"}>
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Logo className={"App-logo"} />
        </NavbarHeading>
        <NavbarDivider />
        <Link to="/patients">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="people" text="Patients" />
        </Link>
        <Link to="/procedures">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="diagnosis" text="Procedures" />
        </Link>
        <Link to="/doctors">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="heart" text="Doctors" />
        </Link>
      </NavbarGroup>

      <NavbarGroup align={Alignment.RIGHT}>
        <Link to="/about">
          <Button className={Classes.MINIMAL + " .bp4-dark"} icon="info-sign" text="About" />
        </Link>
        <BackendInfo />
      </NavbarGroup>
    </Navbar>
  </div>
}
