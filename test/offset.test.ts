import moment from 'moment-timezone'

import {
  names as timezoneNames,
  offset,
} from '../src'

describe('offset', () => {
  for (const tz of timezoneNames) {
    it(`should output correct result for ${tz}`, () => {
      const result = offset(tz)
      expect(result).toBe(moment.tz(tz).utcOffset())
    })
  }
})
