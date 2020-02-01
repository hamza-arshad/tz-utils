import {
  names as timezoneNames,
  suggested as getSuggestedTimezone,
} from '../src'

describe('suggested', () => {
  it('should output correct suggested timezone', () => {
    const suggested = getSuggestedTimezone()
    expect(timezoneNames).toContain(suggested)
  })
})
