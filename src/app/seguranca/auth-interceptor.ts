import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { parse } from 'url';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const url = request.url;
        const requestUrl = parse(request.url, false, true);

        const blacklistedRoutes = (environment.tokenBlacklistedRoutes.findIndex(function (route) {
            return typeof route === 'string'
                ? route === url
                : route instanceof RegExp
                    ? route.test(url)
                    : false;
        }) > -1);

        const whitelistedDomains =
            (requestUrl.host === null ||
                environment.tokenWhitelistedDomains.findIndex(function (domain) {
                    return typeof domain === 'string'
                        ? domain === requestUrl.host
                        : domain instanceof RegExp
                            ? domain.test(requestUrl.host)
                            : false;
                }) > -1);

        if (token && whitelistedDomains && !blacklistedRoutes) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }

        return next.handle(request);
    }
}
