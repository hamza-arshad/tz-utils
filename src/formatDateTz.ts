import {
  utcToZonedTime,
  format as formatDate,
} from 'date-fns-tz'

import resolveTimezone from './utils/resolveTimezone'

type DateInput = Parameters<typeof utcToZonedTime>[0]

export default (date: DateInput, format: string, timezone: string) => {
  const tz = resolveTimezone(timezone)
  const zonedDateTime = utcToZonedTime(date, tz!)
  return formatDate(zonedDateTime, format, {
    timeZone: tz,
  })
}
