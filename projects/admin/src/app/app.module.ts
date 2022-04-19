import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroModule } from '@ngom/hero';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeroModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
