import {Title} from "../Title";
import {ItemRenderer} from "@blueprintjs/select";
import {MenuItem} from "@blueprintjs/core";
import {highlightText} from "../helper/StringHelper";

export const titles: Title[] = [{name: "Mister"}, {name: "Miss"}, {name: "Madame"}, {name: "Doctor"}, {name: ""}]

export const renderTitle: ItemRenderer<Title> = (film, {handleClick, modifiers, query}) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${film.name}`;
  return (
    <MenuItem onClick={handleClick} text={highlightText(text, query)}/>
  );
};
