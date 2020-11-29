import moment from 'moment-timezone'

import {
  names as timezoneNames,
  deprecatedNames,
  notWorkingInDateFnsNames,
} from '../src'

import { configurable } from '../src/offset'

import {
  notWorkingInMoment as notWorkingInMomentTimezoneNames,
} from '../src/data/names'

import dates from './data/dates'

const timezones = [
  ...timezoneNames,
  ...deprecatedNames,
  ...notWorkingInDateFnsNames,
]

describe('offset', () => {
  for (const date of dates) {
    const offset = configurable(() => new Date(date))
    for (const tz of timezones) {
      it(`should output correct result for (${date}, ${tz})`, () => {
        const result = offset(tz)
        expect(result).toMatchSnapshot()
      })
    }
  }

  for (const tz of notWorkingInMomentTimezoneNames) {
    it(`should not work in moment for ${tz}`, () => {
      const result = moment.tz(tz).utcOffset()
      expect(result).toBe(0)
    })
  }
})
