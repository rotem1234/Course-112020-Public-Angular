import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/app-title/title.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';

@NgModule({
  declarations: [
    AppComponent, 
    TitleComponent, 
    StringSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
