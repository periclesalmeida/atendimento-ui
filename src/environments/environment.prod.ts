export const environment = {
  production: false,
  API_URL: 'http://localhost:8083',
  tokenWhitelistedDomains: [  new RegExp('localhost:8083') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ],
  env: 'dev'
};