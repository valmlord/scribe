const path = require('path');
const baseConfig = require('../../infra/testing/jest.config.base');

module.exports = {
  ...baseConfig,
  displayName: 'web',
  rootDir: path.resolve(__dirname),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  }
};