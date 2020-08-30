import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom/components/header/header.component';
import { FooterComponent } from './custom/components/footer/footer.component';
import { SpaceXFilterComponent } from './custom/components/space-x-filter/space-x-filter.component';
import { SpaceXDataComponent } from './custom/components/space-x-data/space-x-data.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SpaceXService } from './custom/services/space-x.service';
import { LoaderService } from './custom/services/loader-service.service';
import { LoaderInterceptorService } from './custom/services/loader-interceptor-service.service';
import { LoaderComponent } from './custom/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpaceXFilterComponent,
    SpaceXDataComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpaceXService,LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
