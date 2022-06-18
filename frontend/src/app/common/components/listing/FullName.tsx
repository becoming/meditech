interface Props {
  firstName?: string
  lastName?: string
}

export function FullName(props: Props) {

  let value = "[unknown]";
  let extraClass = "App-listing-unknown-yellow";

  if (props.firstName) {
    value = props.firstName
    extraClass = ""
  }

  if (props.lastName) {
    value = value + " " + props.lastName
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-full-name"}
               title={"First name: " + props.firstName + ", Last name: " + props.lastName}>
    {value}
  </span>
}
