import moment from 'moment-timezone'

import {
  names as timezoneNames,
  deprecatedNames,
  offset,
} from '../src'

import {
  notWorkingInMoment as notWorkingInMomentTimezoneNames,
} from '../src/data/names'

const allNames = [
  ...timezoneNames,
  ...deprecatedNames,
]

describe('offset', () => {
  for (const tz of allNames) {
    it(`should output correct result for ${tz}`, () => {
      const result = offset(tz)
      expect(result).toBe(moment.tz(tz).utcOffset())
    })
  }

  for (const tz of notWorkingInMomentTimezoneNames) {
    it(`should not work in moment for ${tz}`, () => {
      const result = moment.tz(tz).utcOffset()
      expect(result).toBe(0)
    })
  }
})
