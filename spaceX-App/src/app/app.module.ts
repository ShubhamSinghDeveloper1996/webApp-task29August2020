import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom/components/header/header.component';
import { FooterComponent } from './custom/components/footer/footer.component';
import { SpaceXFilterComponent } from './custom/components/space-x-filter/space-x-filter.component';
import { SpaceXDataComponent } from './custom/components/space-x-data/space-x-data.component';

import { HttpClientModule } from '@angular/common/http';
import { SpaceXService } from './custom/services/space-x.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpaceXFilterComponent,
    SpaceXDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
