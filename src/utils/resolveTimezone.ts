import workingNames, {
  deprecated,
  notWorkingInDateFns,
} from '../data/names'

const workingNamesSet = new Set(workingNames)

const lookupObj = {
  ...deprecated,
  ...notWorkingInDateFns,
}

type WorkingName = (typeof workingNames)[number]
type DeprecatedName = keyof typeof deprecated
type NotWorkingInDateFnsName = keyof typeof notWorkingInDateFns

export default (timezone: string): WorkingName | undefined =>
  workingNamesSet.has(timezone as WorkingName)
    ? timezone as WorkingName
    : lookupObj[timezone as DeprecatedName | NotWorkingInDateFnsName] as WorkingName | undefined
