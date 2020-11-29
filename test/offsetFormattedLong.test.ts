import {
  names as timezoneNames,
  deprecatedNames,
  notWorkingInDateFnsNames,
} from '../src'

import { configurable } from '../src/offsetFormattedLong'

import dates from './data/dates'

const timezones = [
  ...timezoneNames,
  ...deprecatedNames,
  ...notWorkingInDateFnsNames,
]

describe('offsetFormattedLong', () => {
  for (const date of dates) {
    const offsetFormattedLong = configurable(() => new Date(date))
    for (const tz of timezones) {
      it(`should output correct result for (${date}, ${tz})`, () => {
        const result = offsetFormattedLong(tz)
        expect(result).toMatchSnapshot()
      })
    }

    it(`should work correctly with rubbish data (${date})`, () => {
      const result = offsetFormattedLong('shit')
      expect(result).toBe(null)
    })
  }
})
