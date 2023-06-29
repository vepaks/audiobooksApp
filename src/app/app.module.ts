import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AudiobookPageComponent } from './audiobook-page/audiobook-page.component';
import {MatButtonModule} from "@angular/material/button";
import { AudiobookComponent } from './shared/components/audiobook/audiobook.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AudiobookPageComponent,
    AudiobookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatCardModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
