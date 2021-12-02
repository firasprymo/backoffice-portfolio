import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { HeaderComponent } from './component/header/header.component';
import { CardsComponent } from './pages/home/cards/cards.component';
import { ContentComponent } from './pages/home/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    HeaderComponent,
    CardsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
