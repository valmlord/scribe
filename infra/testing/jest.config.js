const path = require('path');
const rootDir = path.resolve(__dirname, '../../');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: rootDir,
  testMatch: [
    '**/__tests__/**/*.test.{ts,tsx}'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  coverageDirectory: path.resolve(rootDir, 'coverage'),
  setupFilesAfterEnv: [path.resolve(rootDir, '__tests__/setup.ts')],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/apps/web/src/$1',
    '^@shared/(.*)$': '<rootDir>/packages/shared/src/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/__tests__/mocks/styleMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__tests__/mocks/fileMock.js'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
  projects: [
    {
      displayName: 'shared',
      rootDir: rootDir, 
      testMatch: ['<rootDir>/__tests__/packages/shared/**/**/*.test.{ts,tsx}'],
      transform: {
        '^.+\\.tsx?$': ['ts-jest', {
          tsconfig: path.resolve(rootDir, 'packages/shared/tsconfig.json'),
        }]
      }
    }
  ],
  
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/'
  ]
};