import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return  {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '**/test/**/*.spec.ts'
    ],
    testTimeout: 30000,
    verbose: true,
    reporters: [
      'default'
    ]
  }
};
