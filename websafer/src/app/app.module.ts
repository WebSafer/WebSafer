import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppButtonsComponent } from './app-buttons/app-buttons.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppImageComponent } from './app-image/app-image.component';
import { PageService } from './services/page.service';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonsComponent,
    AppContentComponent,
    AppImageComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
