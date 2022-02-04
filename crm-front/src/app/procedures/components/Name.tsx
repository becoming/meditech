interface Props {
  value?: string
}

export function Name(props: Props) {

  let value = "[unknown]";
  let extraClass = "App-listing-unknown-yellow";

  if(props.value) {
    value = props.value
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-name"}
               title={"Name: " + value}>
    {value}
  </span>
}
