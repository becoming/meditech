import {renderTitle, titles} from "./Titles";
import {Button, FormGroup} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import {TitleVO} from "../vo/TitleVO";
import {useCallback, useState} from "react";

const TitleSelectTag = Select.ofType<TitleVO>();

interface Props {
  disabled: boolean
  onItemSelect: (title: TitleVO) => void
  title?: TitleVO
}

export function TitleSelect(props: Props) {
  const [title, setTitle] = useState(props.title || titles[0]);

  const onItemSelect = useCallback((t: TitleVO) => {
    setTitle(t);
    props.onItemSelect(t)
  }, []);

  return <FormGroup label="Title">
    <TitleSelectTag
      disabled={props.disabled}
      key={title.name}
      items={titles}
      activeItem={props.title}
      onItemSelect={onItemSelect}
      itemRenderer={renderTitle}>

      <Button icon="caret-down" intent="none" text={title.name} disabled={props.disabled}/>

    </TitleSelectTag>
  </FormGroup>
}
