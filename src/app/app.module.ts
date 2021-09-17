import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ExteriorsComponent } from './exteriors/exteriors.component';
import { UnitsComponent } from './units/units.component';
import { UnitComponent } from './units/unit/unit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    HeaderComponent,
    FooterDesktopComponent,
    AboutComponent,
    LocationComponent,
    ExteriorsComponent,
    UnitsComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
