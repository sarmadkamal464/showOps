// jest.config.js
module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
    // setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
  };