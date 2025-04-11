import { fileURLToPath } from 'url';
import path from 'path';
import baseConfig from '../../infra/testing/jest.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  ...baseConfig,
  displayName: 'shared',
  rootDir: path.resolve(__dirname),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}'
  ]
};