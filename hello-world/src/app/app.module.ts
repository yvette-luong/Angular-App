import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentsComponent } from './contents/contents.component';
// import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// , SharedModule
