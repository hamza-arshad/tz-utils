import workingNames, {
  deprecated,
  notWorkingInDateFns,
} from '../data/names'

const workingNamesSet = new Set(workingNames)

const lookupObj = {
  ...deprecated,
  ...notWorkingInDateFns,
}

type WorkingNames = (typeof workingNames)[number]
type DeprecatedNames = keyof typeof deprecated
type NotWorkingInDateFnsName = keyof typeof notWorkingInDateFns

export default (timezone: string): WorkingNames | undefined =>
  workingNamesSet.has(timezone as WorkingNames)
    ? timezone as WorkingNames
    : lookupObj[timezone as DeprecatedNames | NotWorkingInDateFnsName] as WorkingNames | undefined
