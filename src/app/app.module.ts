import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './content/main/main.component';
import { CharactersComponent } from './content/characters/characters.component';
import { PersonageComponent } from './content/personage/personage.component';
import { ResidentsComponent } from './content/residents/residents.component';
import { AboutComponent } from './content/about/about.component';
import { OrderByPlanetPipe } from './pipes/order-by-planet.pipe';
import { ResultComponent } from './content/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CharactersComponent,
    PersonageComponent,
    ResidentsComponent,
    AboutComponent,
    OrderByPlanetPipe,
    ResultComponent
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
