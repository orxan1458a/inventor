import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request).do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     //do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       //redirect to the login route
    //       //or show a modal
    //     }
    //   }
    // })
    return next.handle(request);
  }
}
