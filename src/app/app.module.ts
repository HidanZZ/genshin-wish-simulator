import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    BrowserAnimationsModule, ButtonModule, CarouselModule, DialogModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule {
}
