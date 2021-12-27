export const toDate = (dateWithTime?: string): Date | undefined => {
  if (dateWithTime) {
    return new Date(dateWithTime)
  }

  return undefined;
}

//FIXME, find a better suited name, or override, or .. HZ
export const toDate2 = (dateWithTime: string): Date => {
  return new Date(dateWithTime)
}

export const cloneDate = (date?: Date): Date | undefined => {
  if (date) return cloneDate2(date)

  return date
}

export const cloneDate2 = (date: Date): Date => {
  return new Date(date)
}

export const toDateString = (dateWithTime?: Date) => {
  if (dateWithTime) return toDateString2(dateWithTime)

  return dateWithTime;
}

export const toDateString2 = (dateWithTime: Date) => {
  return `${zero(dateWithTime.getDate())}-${zero(dateWithTime.getMonth() + 1)}-${dateWithTime.getFullYear()}`
}

export const toDateTimeString = (dateWithTime?: Date) => {
  if (dateWithTime) {
    return `${zero(dateWithTime.getDate())}-${zero(dateWithTime.getMonth())}-${dateWithTime.getFullYear()} ${zero(dateWithTime.getHours())}:${zero(dateWithTime.getMinutes())}`
  }

  return dateWithTime;
}

export const toUTCString = (date: Date): string => {
  return ""
    + zero(date.getUTCDate()) + "-" + zero(date.getUTCMonth()) + "-" + date.getUTCFullYear() + " "
    + zero(date.getUTCHours()) + ":" + zero(date.getUTCMinutes()) + ":" + zero(date.getUTCSeconds())
}

const zero = (nr: number) => {
  return String(nr).padStart(2, '0')
}
