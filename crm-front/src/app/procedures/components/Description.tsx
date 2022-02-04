interface Props {
  value?: string
}

export function Description(props: Props) {

  let value = "[unknown]";
  let extraClass = "App-listing-unknown-yellow";

  if(props.value) {
    value = props.value
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-description"}
               title={"Descriptions: " + value}>
    {value}
  </span>
}
