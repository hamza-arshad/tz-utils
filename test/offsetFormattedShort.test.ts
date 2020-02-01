import {
  names as timezoneNames,
  offsetFormattedShort,
} from '../src'

const RE = /^GMT([+−]\d{1,2}(:\d{2})?)?$/

const rubbishTimezone = 'shit'

describe('offsetFormattedShort', () => {
  for (const tz of timezoneNames) {
    it(`should output correct result for ${tz}`, () => {
      const result = offsetFormattedShort(tz)
      expect(result).toMatch(RE)
      expect(result).not.toMatch(/\:00$/)
    })
  }

  it('should output correct sign', () => {
    const ny = offsetFormattedShort('America/New_York')!
    const moscow = offsetFormattedShort('Europe/Moscow')!
    const gmt = offsetFormattedShort('GMT')
    expect(ny[3]).toBe('−')
    expect(moscow[3]).toBe('+')
    expect(gmt).toBe('GMT')
  })

  it('should work correctly with rubbish data', () => {
    const result = offsetFormattedShort(rubbishTimezone)
    expect(result).toBe(null)
  })
})
