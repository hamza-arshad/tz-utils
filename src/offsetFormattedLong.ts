import moment from 'moment-timezone'

const names = moment.tz.names()

export const configurable = (getRelativeDate: () => Date) =>
  /**
   * @return GMT+00:00, GMT+01:00, GMT+04:30, GMT-11:00
   */
  (timezone: string) => {
    if (!names.includes(timezone)) {
      return null
    }

    const m = moment(getRelativeDate()).tz(timezone)
    return `GMT${m.format('Z')}`
  }

export default configurable(() => new Date())
