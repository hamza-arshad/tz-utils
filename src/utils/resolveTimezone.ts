import workingNames, { deprecated } from '../data/names'

type WorkingNames = (typeof workingNames)[number]
type DeprecatedNames = keyof typeof deprecated

export default (timezone: string): WorkingNames =>
  workingNames.includes(timezone as WorkingNames)
    ? timezone as WorkingNames
    : deprecated[timezone as DeprecatedNames]
