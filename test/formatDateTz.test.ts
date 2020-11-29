import {
  formatDateTz,
  names as timezoneNames,
  deprecatedNames,
  notWorkingInDateFnsNames,
} from '../src'

import dates from './data/dates'

const FORMAT = 'yyyy-MM-dd, HH:mm:ss'

const timezones = [
  ...timezoneNames,
  ...deprecatedNames,
  ...notWorkingInDateFnsNames,
]

describe('formatDateTz', () => {
  for (const tz of timezones) {
    for (const date of dates) {
      test(`splitDate (${date}, ${tz})`, () => {
        const result = formatDateTz(date, FORMAT, tz)
        expect(result).toMatchSnapshot()
      })
    }
  }

  for (const date of dates) {
    test(`splitDate deprecated tz (${date})`, () => {
      const res1 = formatDateTz(date, FORMAT, 'Navajo')
      const res2 = formatDateTz(date, FORMAT, 'America/Denver')
      expect(res1).toBe(res2)
    })
  }

  for (const date of dates) {
    test(`splitDate not working in date-fns tz (${date})`, () => {
      const res1 = formatDateTz(date, FORMAT, 'Etc/GMT-3')
      const res2 = formatDateTz(date, FORMAT, 'Europe/Moscow')
      expect(res1).toBe(res2)
    })
  }
})
