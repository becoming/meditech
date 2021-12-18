import {Button, ControlGroup, FormGroup, InputGroup, MenuItem} from "@blueprintjs/core";
import {PageTitle} from "../PageTitle";
import {ItemRenderer, Select} from "@blueprintjs/select";
import {useCallback, useState} from "react";
import {highlightText} from "../helper/StringHelper";

interface Title {
  name: string
}

const titles: Title[] = [{name: "Mister"}, {name: "Miss"}, {name: "Madame"}, {name: "Doctor"}, {name: ""}]

export const renderTitle: ItemRenderer<Title> = (film, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${film.name}`;
  return (
    <MenuItem onClick={handleClick} text={highlightText(text, query)} />
  );
};

const TitleSelect = Select.ofType<Title>();

export function NewPatient() {
  const [title, setTitle] = useState(titles[0]);

  const handleItemSelect = useCallback((newFilm: Title) => {
    setTitle(newFilm);
  }, []);

  return <div className={"App-page-container"}>
    <PageTitle value={"New patient"} backUrl={"/patients"}/>

    <div className={"App-form"}>

        <ControlGroup vertical={false}>
          <FormGroup label="Title">
            <TitleSelect
              key={title.name}
              items={titles}
              activeItem={title}
              onItemSelect={handleItemSelect}
              itemRenderer={renderTitle}>
              <Button icon="caret-down" intent="none" text={title.name} />
            </TitleSelect>
          </FormGroup>
          <FormGroup label="First name" labelFor="firstName">
            <InputGroup id="firstName" placeholder="John"/>
          </FormGroup>

          <FormGroup label="Last name" labelFor="lastName">
            <InputGroup id="lastName" placeholder="Doe"/>
          </FormGroup>

          <FormGroup label="&nbsp;">
            <Button rightIcon="arrow-right" intent="success" text="Submit" />
          </FormGroup>

        </ControlGroup>

    </div>
  </div>

}
