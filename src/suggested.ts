/**
 * @return suggested timezone
 */
export default () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone
