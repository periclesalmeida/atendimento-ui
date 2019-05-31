export const environment = {
  production: false,
  API_URL: '//10.1.16.37:4000',
  tokenWhitelistedDomains: [  new RegExp('10.1.16.37:4000') ],
//  tokenBlacklistedRoutes: [ ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ],
  env: 'dev'
  //tokenBlacklistedRoutes: [ new RegExp('localhost:?[0-9]*\/oauth\/token') ]
};
