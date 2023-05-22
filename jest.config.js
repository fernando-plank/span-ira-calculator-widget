module.exports = {
  setupFiles: ['<rootDir>/jestSetEnvVars.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mock/fileMock.js",
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    "^@styles/(.*)$": '<rootDir>/src/styles/$1',
    "^@assets/(.*)$": '<rootDir>/src/assets/$1',
    "^@common/(.*)$": '<rootDir>/src/common/$1',
    "^@services/(.*)$": '<rootDir>/src/services/$1',
    "^@mock/(.*)$": '<rootDir>/src/mock/$1',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['<rootDir>/**/components/**/index.(ts|tsx)', '!<rootDir>/**/components/Icon/index.(ts|tsx)', '!<rootDir>/**/components/Navbar/index.(ts|tsx)'],
  roots: ['<rootDir>'],
  testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/utils/svgTransform.js',
    '^.+\\.jsx?$': 'babel-jest'
  },
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
};
