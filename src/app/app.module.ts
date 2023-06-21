import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialPageComponent } from './pages/material-page/material-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TopicDetailPageComponent } from './pages/topic-detail-page/topic-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MaterialPageComponent,
    ContactPageComponent,
    MaterialListPageComponent,
    AboutPageComponent,
    TopicDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
