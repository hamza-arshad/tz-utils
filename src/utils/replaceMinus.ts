const MINUS_RE = /-/g

export default (s: string) =>
  s.replace(MINUS_RE, '−')
