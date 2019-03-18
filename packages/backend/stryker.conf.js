module.exports = function(config) {
  config.set({
    coverageAnalysis: 'off',
    files: ['src/**/*.ts', 'package.json'],
    jest: {
      config: require('./package.json').jest,
    },
    maxConcurrentTestRunners: 4,
    mutate: [
      'src/**/*.ts',
      '!src/main.ts',
      '!src/main.hmr.ts',
      '!src/**/*.module.ts',
      '!src/**/*.spec.ts',
    ],
    mutator: 'typescript',
    packageManager: 'yarn',
    reporters: ['html', 'baseline', 'clear-text', 'progress', 'dashboard'],
    testRunner: 'jest',
    transpilers: [],
    tsconfigFile: 'tsconfig.json',
  });
};
