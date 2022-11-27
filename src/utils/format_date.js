import dayjs from "dayjs";

export function formartMonthDay(date,formatStr="MM月DD日") {
  return dayjs(date).format(formatStr)
}

export function getCountDays(startDay,endDay ){
  return dayjs(endDay).diff(startDay, "day")
}