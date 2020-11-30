import moment from 'moment-timezone'

const names = moment.tz.names()

/**
 * @return GMT, GMT+1, GMT+4:30, GMT-11
 */
export default (timezone: string) => {
  if (!names.includes(timezone)) {
    return null
  }

  const [h, m] = moment.tz(timezone)
    .format('Z')
    .split(':')

  if (h === '+00') {
    return 'GMT'
  }

  const hours = +h
  const sign = hours < 0 ? '-' : '+'

  return `GMT${sign}${Math.abs(hours)}${m === '00' ? '' : `:${m}`}`
}
