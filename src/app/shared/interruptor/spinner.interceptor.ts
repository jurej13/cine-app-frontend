import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinner : NgxSpinnerService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show()
    return next.handle(request).pipe(
      delay(1000),
      tap(resp=> console.log('haciendo algo')),
      finalize(()=>this.spinner.hide())
    )
  }
}
