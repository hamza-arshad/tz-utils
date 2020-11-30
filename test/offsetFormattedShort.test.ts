import {
  names as timezoneNames,
  deprecatedNames,
  notWorkingInDateFnsNames,
  offsetFormattedShort,
} from '../src'

const RE = /^GMT([+-]\d{1,2}(:\d{2})?)?$/
const THIRTY_MINUTES_RE = /^GMT[+-]\d:30$/

const rubbishTimezone = 'shit'

const allNames = [
  ...timezoneNames,
  ...deprecatedNames,
  ...notWorkingInDateFnsNames,
]

describe('offsetFormattedShort', () => {
  for (const tz of allNames) {
    it(`should output correct result for ${tz}`, () => {
      const result = offsetFormattedShort(tz)
      expect(result).toMatch(RE)
      expect(result).not.toMatch(/\:00$/)
    })
  }

  it('should output correct sign', () => {
    const ny = offsetFormattedShort('America/New_York')!
    const moscow = offsetFormattedShort('Europe/Moscow')!
    const kolkata = offsetFormattedShort('Asia/Kolkata')!
    const gmt = offsetFormattedShort('GMT')
    expect(ny[3]).toBe('-')
    expect(moscow[3]).toBe('+')
    expect(kolkata[3]).toBe('+')
    expect(gmt).toBe('GMT')
  })

  it('should output minutes for fractional timezones', () => {
    const kolkata = offsetFormattedShort('Asia/Kolkata')
    expect(kolkata).toMatch(THIRTY_MINUTES_RE)
  })

  it('should work correctly with rubbish data', () => {
    const result = offsetFormattedShort(rubbishTimezone)
    expect(result).toBe(null)
  })
})
