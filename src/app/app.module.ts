import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page-one/home/home.component';
import { HeaderComponent } from './page-one/header/header.component';
import { BlankComponent } from './page-one/blank/blank.component';
import { SearchcardComponent } from './page-one/searchcard/searchcard.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { HomeTwoComponent } from './page-two/home-two/home-two.component';
import { HeaderTwoComponent } from './page-two/header-two/header-two.component';
import { SearchcardTwoComponent } from './page-two/searchcard-two/searchcard-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BlankComponent,
    SearchcardComponent,
    PageTwoComponent,
    PageOneComponent,
    HomeTwoComponent,
    HeaderTwoComponent,
    SearchcardTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
