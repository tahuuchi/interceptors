import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, tap } from "rxjs/operators";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes("header")) {
      return next.handle(request);
    }

    return next.handle(request).pipe(tap(() => console.log("header")));
  }
}
