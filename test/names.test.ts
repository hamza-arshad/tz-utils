import moment from 'moment-timezone'

import {
  names as timezoneNames,
} from '../src'

describe('names', () => {
  it('should have all the timezone names that moment does', () => {
    const sortedTimezoneNames = timezoneNames.slice().sort()
    const sortedMomentTimezoneNames = moment.tz.names().slice().sort()
    expect(sortedTimezoneNames).toEqual(sortedMomentTimezoneNames)
  })
})
