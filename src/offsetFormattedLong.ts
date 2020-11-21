import moment from 'moment-timezone'

import replaceMinus from './utils/replaceMinus'
import names from './names'

/**
 * @return GMT+00:00, GMT+01:00, GMT+04:30, GMT-11:00
 */
export default (timezone: string) => {
  if (!names.includes(timezone)) {
    return null
  }

  const m = moment.tz(timezone)
  const s = `GMT${m.format('Z')}`
  return replaceMinus(s)
}
