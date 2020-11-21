import {
  names as timezoneNames,
  deprecatedNames,
  offsetFormattedLong,
} from '../src'

const RE = /^GMT[+−]\d{2}:\d{2}$/
const THIRTY_MINUTES_RE = /^GMT[+−]\d{2}:30$/

const rubbishTimezone = 'shit'

const allNames = [
  ...timezoneNames,
  ...deprecatedNames,
]

describe('offsetFormattedLong', () => {
  for (const tz of allNames) {
    it(`should output correct result for ${tz}`, () => {
      const result = offsetFormattedLong(tz)
      expect(result).toMatch(RE)
    })
  }

  it('should output correct sign', () => {
    const ny = offsetFormattedLong('America/New_York')!
    const moscow = offsetFormattedLong('Europe/Moscow')!
    const kolkata = offsetFormattedLong('Asia/Kolkata')!
    const gmt = offsetFormattedLong('GMT')
    expect(ny[3]).toBe('−')
    expect(moscow[3]).toBe('+')
    expect(kolkata[3]).toBe('+')
    expect(gmt).toBe('GMT+00:00')
  })

  it('should output minutes for fractional timezones', () => {
    const kolkata = offsetFormattedLong('Asia/Kolkata')
    expect(kolkata).toMatch(THIRTY_MINUTES_RE)
  })

  it('should work correctly with rubbish data', () => {
    const result = offsetFormattedLong(rubbishTimezone)
    expect(result).toBe(null)
  })
})
