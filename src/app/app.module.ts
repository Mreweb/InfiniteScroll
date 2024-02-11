import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './features/feature.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './core/interceptor/interceptor';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ContentService } from './services/ui/content.service';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [ ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    BlockUIModule.forRoot({
      message: '...لطفا منتظر بمانید',
      delayStart: 0,
      delayStop: 0
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FeatureModule
  ],
  providers: [
    ContentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
