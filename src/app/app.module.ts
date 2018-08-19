import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ErrorHandlerInterceptor } from './error-handler-interceptor/error-handler-interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
