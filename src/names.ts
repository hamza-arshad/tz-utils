import workingNames, { deprecated as deprecatedObj } from './data/names'

/**
 * @return timezone names
 */
export default Object.freeze(workingNames)

type DeprecatedTz = keyof typeof deprecatedObj

export const deprecated = Object.freeze(Object.keys(deprecatedObj) as DeprecatedTz[])
