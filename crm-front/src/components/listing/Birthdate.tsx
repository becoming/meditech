interface Props {
  date: string
}

export function Birthdate(props: Props) {

  let value = "[no-birthdate]";
  let extraClass = "App-listing-unknown"

  if(props.date) {
    value = props.date
    extraClass = ""
  }

  return <span className={extraClass + " App-listing-birthdate"} title={value}>{value}</span>
}
