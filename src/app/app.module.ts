import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//? Configuración del locale de la app
import localeEs419 from '@angular/common/locales/es-419'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';


registerLocaleData( localeEs419 );
registerLocaleData( localeFrCA );


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-419'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
