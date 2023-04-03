import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppButtonsComponent } from './app-buttons/app-buttons.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppImageComponent } from './app-image/app-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonsComponent,
    AppContentComponent,
    AppImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
