module.exports = {
  verbose: false,
  modulePaths: [
    '<rootDir>',
  ],
  moduleNameMapper: {
    '^date-fns-tz/esm/(.*)$': 'date-fns-tz/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
