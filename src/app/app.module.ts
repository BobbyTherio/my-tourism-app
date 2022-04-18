import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ImportantTextDirective } from './directives/important-text.directive';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherdetailsComponent } from './components/weatherdetails/weatherdetails.component';
import { GetCityNamesService } from './services/get-city-names.service';
import { GetCityNamesDirective } from './services/get-city-names.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    WeatherdetailsComponent,
    ImportantTextDirective,
    TechIdeasComponent,
    WeatherdetailsComponent,
    ImportantTextDirective, GetCityNamesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
