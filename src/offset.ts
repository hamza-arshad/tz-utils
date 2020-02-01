import moment from 'moment-timezone'

export default (timezone: string) =>
  moment.tz(timezone).utcOffset()
