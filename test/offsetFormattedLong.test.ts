import {
  names as timezoneNames,
  offsetFormattedLong,
} from '../src'

const RE = /^GMT[+-]\d{2}:\d{2}$/

const rubbishTimezone = 'shit'

describe('offsetFormattedLong', () => {
  for (const tz of timezoneNames) {
    it(`should output correct result for ${tz}`, () => {
      const result = offsetFormattedLong(tz)
      expect(result).toMatch(RE)
    })
  }

  it('should output correct sign', () => {
    const ny = offsetFormattedLong('America/New_York')!
    const moscow = offsetFormattedLong('Europe/Moscow')!
    const gmt = offsetFormattedLong('GMT')
    expect(ny[3]).toBe('-')
    expect(moscow[3]).toBe('+')
    expect(gmt).toBe('GMT+00:00')
  })

  it('should work correctly with rubbish data', () => {
    const result = offsetFormattedLong(rubbishTimezone)
    expect(result).toBe(null)
  })
})
