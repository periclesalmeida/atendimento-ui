export const environment = {
  production: false,
  API_URL: 'http://srv-apl02:8795',
  tokenWhitelistedDomains: [ new RegExp('srv-apl02:8795') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token'), new RegExp('\/api\/aluno-egresso\/usuario'), new RegExp('\/api\/aluno-egresso\/usuario\/resetar-senha') ],
  env: 'test'
};