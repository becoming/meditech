import {DateFormatProps} from "@blueprintjs/datetime";

export const newPatientDateFormatter: DateFormatProps = {
  // note that the native implementation of Date functions differs between browsers
  formatDate: date => date.toLocaleDateString(),
  parseDate: str => new Date(str),
  placeholder: "M/D/YYYY",
};

export const toDate = (dateWithTime?: string) => {
  if(dateWithTime) {
    return dateWithTime.split(" ")[0]
  }

  return dateWithTime;
}
