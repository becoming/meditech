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

export const toUTC = (date: string): Date => {
  return Date()
}

export const toUTCString = (date: Date): string => {
  return ""
    + zero(date.getUTCDate()) + "-" + zero(date.getUTCMonth()) + "-" + date.getUTCFullYear() + " "
    + zero(date.getUTCHours()) + ":" + zero(date.getUTCMinutes()) + ":" + zero(date.getUTCSeconds())
}

const zero = (nr: number) => {
  return String(nr).padStart(2, '0')
}
