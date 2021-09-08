module.exports = {
    roots: ['<rootDir>/src'],
    // Jest failed to parse a file. This happens e.g. when your code or its dependencies use
    // non-standard JavaScript syntax, or when Jest is not configured to support such syntax.
    // To remove above error use below line
    transform: {
      '\\.(ts|tsx)?$': 'ts-jest',
    },
    // What extension files should I target
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/public/', '/lib/'],
    // To get all the extend supported things
    setupFilesAfterEnv: [
      '@testing-library/jest-dom',
    ],
    // The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    // Consider using the "jsdom" test environment.
    // Specify the env to be JSDOM
    testEnvironment: 'jsdom',
};
