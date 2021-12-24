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

export const toUTC = (date: Date): string => {
  return ""
    + zeroDate(date.getUTCDate()) + "-" + zeroDate(date.getUTCMonth()) + "-" + date.getUTCFullYear() + " "
    + zeroTime(date.getUTCHours()) + ":" + zeroTime(date.getUTCMinutes()) + ":" + zeroTime(date.getUTCSeconds())
}

const zeroDate = (nr: number) => {
  return String(nr + 1).padStart(2, '0')
}

const zeroTime = (nr: number) => {
  return String(nr).padStart(2, '0')
}
