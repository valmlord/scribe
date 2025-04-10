const path = require('path');
const baseConfig = require('../../infra/testing/jest.config.base');

module.exports = {
  ...baseConfig,
  displayName: 'shared',
  rootDir: path.resolve(__dirname),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
};