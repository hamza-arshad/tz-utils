import moment from 'moment-timezone'

import {
  names as timezoneNames,
  deprecatedNames,
} from '../src'
import { notWorkingInDateFns as notWorkingInDateFnsTimezoneNames } from '../src/data/names'

describe('names', () => {
  it('should have all the timezone names that moment does', () => {
    const sortedTimezoneNames = [
      ...timezoneNames,
      ...deprecatedNames,
      ...notWorkingInDateFnsTimezoneNames,
    ].sort()
    const sortedMomentTimezoneNames = moment.tz.names().slice().sort()
    expect(sortedTimezoneNames).toEqual(sortedMomentTimezoneNames)
  })
})
