import { Injectable, Injector } from '@angular/core';

import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { parse } from 'url';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

constructor(private injector: Injector, private router: Router) {}

 intercept(
  request: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    const url = request.url;

    const blacklistedRoutes = (environment.tokenBlacklistedRoutes.findIndex(function (route) {
        return typeof route === 'string'
            ? route === url
            : route instanceof RegExp
                ? route.test(url)
                : false;
    }) > -1)

    var requestUrl = parse(request.url, false, true);
    const WhitelistedDomains =
    (requestUrl.host === null ||
        environment.tokenWhitelistedDomains.findIndex(function (domain) {
                return typeof domain === 'string'
                    ? domain === requestUrl.host
                    : domain instanceof RegExp
                        ? domain.test(requestUrl.host)
                        : false;
            }) > -1)

    if (token && WhitelistedDomains && !blacklistedRoutes) {
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
    }
    return next.handle(request);
 }
 

}
