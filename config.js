const environments = {
  local: {
    name: 'local',
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',
    analyticsEnabled: false,
  },
  development: {
    name: 'development',
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',
    analyticsEnabled: false,
  },
  test: {
    name: 'test',
    baseUrl: 'http://localhost:3001',
    apiBaseUrl: 'http://localhost:3001/api',
    analyticsEnabled: false,
  },
  staging: {
    name: 'staging',
    baseUrl: 'https://staging.growthtoolz.in',
    apiBaseUrl: 'https://staging.growthtoolz.in/api',
    analyticsEnabled: true,
  },
  production: {
    name: 'production',
    baseUrl: 'https://growthtoolz.in',
    apiBaseUrl: 'https://growthtoolz.in/api',
    analyticsEnabled: true,
  },
};

const resolveEnvName = () => {
  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV) {
    return process.env.NODE_ENV;
  }

  if (typeof window !== 'undefined' && window.GROWTH_TOOLZ_ENV) {
    return window.GROWTH_TOOLZ_ENV;
  }

  return 'production';
};

const getConfig = (envName = resolveEnvName()) => {
  return environments[envName] || environments.production;
};

const config = getConfig();

export { environments, getConfig, resolveEnvName, config };

if (typeof window !== 'undefined') {
  window.GrowthToolzConfig = {
    environments,
    getConfig,
    resolveEnvName,
    config,
  };
}
