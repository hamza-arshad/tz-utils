import moment from 'moment-timezone'

export const configurable = (getRelativeDate: () => Date) =>
  (timezone: string) =>
    moment(getRelativeDate()).tz(timezone).utcOffset()

export default configurable(() => new Date())
