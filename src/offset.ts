import moment from 'moment-timezone'

import getNow from './utils/getNow'

export const configurable = (getRelativeDate: () => Date) =>
  (timezone: string) =>
    moment(getRelativeDate()).tz(timezone).utcOffset()

export default configurable(getNow)
