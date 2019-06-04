export const environment = {
  production: false,
  API_URL: 'http://srv-apl02:8795',
  tokenWhitelistedDomains: [ new RegExp('srv-apl02:8795') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token')],
  env: 'test'
};
