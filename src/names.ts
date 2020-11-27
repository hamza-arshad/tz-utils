import workingNames, {
  deprecated as deprecatedObj,
  notWorkingInDateFns as notWorkingInDateFnsObj,
} from './data/names'

/**
 * @return timezone names
 */
export default Object.freeze(workingNames)

type DeprecatedTz = keyof typeof deprecatedObj
type NotWorkingInDateFnsTz = keyof typeof notWorkingInDateFnsObj

export const deprecated = Object.freeze(Object.keys(deprecatedObj) as DeprecatedTz[])

export const notWorkingInDateFns = Object.freeze(
  Object.keys(notWorkingInDateFnsObj) as NotWorkingInDateFnsTz[],
)
