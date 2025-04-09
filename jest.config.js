// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for testing React components
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore these paths
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Supported extensions
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for additional configurations
  moduleNameMapper: {
    // Handle module aliases (from tsconfig.json)
    '^@/(.*)$': '<rootDir>/$1',
  },
};

module.exports = createJestConfig(customJestConfig);