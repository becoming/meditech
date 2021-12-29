import {TitleVO} from "../vo/TitleVO";
import {ItemRenderer} from "@blueprintjs/select";
import {MenuItem} from "@blueprintjs/core";
import {highlightText} from "../../helpers/StringHelper";

export const titles: TitleVO[] = [{name: "Mister"}, {name: "Miss"}, {name: "Madame"}, {name: "Doctor"}, {name: ""}]

export const renderTitle: ItemRenderer<TitleVO> = (title, {handleClick, modifiers, query}) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${title.name}`;
  return (
    <MenuItem onClick={handleClick} text={highlightText(text, query)}/>
  );
};
