import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { parse } from 'url';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from '../shared/erro/error-handler.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private router: Router, private errorHandlerService: ErrorHandlerService) { }

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

        return next.handle(request).pipe(
            retry(1),
            catchError((httpErrorResponse: HttpErrorResponse) => {
                let errorMessage = null;

                if (httpErrorResponse.status === 400) {
                    errorMessage = httpErrorResponse.error.map(function (message) {
                        return message.errorUser
                    });

                    this.errorHandlerService.handle(errorMessage.toString());
                } else {
                    this.router.navigate(['/error-page']);
                }

                return throwError(errorMessage);
            })
        );
    }
}
