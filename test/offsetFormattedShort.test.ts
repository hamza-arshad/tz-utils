import {
  names as timezoneNames,
  deprecatedNames,
  notWorkingInDateFnsNames,
} from '../src'

import { configurable } from '../src/offsetFormattedShort'

import dates from './data/dates'

const timezones = [
  ...timezoneNames,
  ...deprecatedNames,
  ...notWorkingInDateFnsNames,
]

describe('offsetFormattedShort', () => {
  for (const date of dates) {
    const offsetFormattedShort = configurable(() => new Date(date))
    for (const tz of timezones) {
      it(`should output correct result for (${date}, ${tz})`, () => {
        const result = offsetFormattedShort(tz)
        expect(result).toMatchSnapshot()
      })
    }

    it(`should work correctly with rubbish data (${date})`, () => {
      const result = offsetFormattedShort('shit')
      expect(result).toBe(null)
    })
  }
})
