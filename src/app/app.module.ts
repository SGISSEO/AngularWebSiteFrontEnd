import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { Angular1SnapComponent } from './angular-snap/angular-snap.component';
import { Angular1SnapListComponent } from './angular-snap-list/angular-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleAngular1SnapComponent } from './single-angular-snap/single-angular-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAngular1SnapComponent } from './new-angular-snap/new-angular-snap.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './interceptors';
@NgModule({
  declarations: [
    AppComponent,
    Angular1SnapComponent,
    Angular1SnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleAngular1SnapComponent,
    NewAngular1SnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
