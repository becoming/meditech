import {renderTitle, titlesHelper} from "../../helpers/TitlesHelper";
import {Button, FormGroup} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import {TitleVO} from "../../vo/identity/TitleVO";
import {useCallback, useState} from "react";

const TitleSelectTag = Select.ofType<TitleVO>();

interface Props {
  disabled: boolean
  onItemSelect: (title: TitleVO) => void
  title?: TitleVO
}

export function FormTitleSelect(props: Props) {
  const [title, setTitle] = useState(props.title || titlesHelper[0]);

  const onItemSelect = useCallback((t: TitleVO) => {
    setTitle(t);
    props.onItemSelect(t)
  }, [props]);

  return <FormGroup label="Title">
    <TitleSelectTag
      disabled={props.disabled}
      key={title.name}
      items={titlesHelper}
      activeItem={props.title}
      onItemSelect={onItemSelect}
      itemRenderer={renderTitle}>

      <Button icon="caret-down" intent="none" text={title.name} disabled={props.disabled}/>

    </TitleSelectTag>
  </FormGroup>
}
