import {TitleView} from "../vo/TitleView";
import {ItemRenderer} from "@blueprintjs/select";
import {MenuItem} from "@blueprintjs/core";
import {highlightText} from "../../../helpers/StringHelper";

export const titles: TitleView[] = [{name: "Mister"}, {name: "Miss"}, {name: "Madame"}, {name: "Doctor"}, {name: ""}]

export const renderTitle: ItemRenderer<TitleView> = (film, {handleClick, modifiers, query}) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${film.name}`;
  return (
    <MenuItem onClick={handleClick} text={highlightText(text, query)}/>
  );
};
