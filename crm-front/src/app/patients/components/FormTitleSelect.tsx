import {renderTitle, titles} from "./Titles";
import {Button, FormGroup} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import {TitleVO} from "../vo/TitleVO";
import {useCallback, useState} from "react";

const TitleSelect = Select.ofType<TitleVO>();

interface Props {
  disabled: boolean
  onItemSelect: (title: TitleVO) => void
  title?: TitleVO
}

export function FormTitleSelect(props: Props) {
  const [title, setTitle] = useState(props.title || titles[0]);

  const onItemSelect = useCallback((title: TitleVO) => {
    setTitle(title);
    props.onItemSelect(title)
  }, []);

  return <FormGroup label="Title">
    <TitleSelect
      disabled={props.disabled}
      key={title.name}
      items={titles}
      activeItem={props.title}
      onItemSelect={onItemSelect}
      itemRenderer={renderTitle}>

      <Button icon="caret-down" intent="none" text={title.name} disabled={props.disabled}/>

    </TitleSelect>
  </FormGroup>
}
