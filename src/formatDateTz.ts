import {
  utcToZonedTime,
  format as formatDate,
} from 'date-fns-tz'

type DateInput = Parameters<typeof utcToZonedTime>[0]

export default (date: DateInput, format: string, timezone: string) => {
  const zonedDateTime = utcToZonedTime(date, timezone)
  return formatDate(zonedDateTime, format, {
    timeZone: timezone,
  })
}
