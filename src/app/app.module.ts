import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewComponent } from './view/view.component';
import { AirlineComponent } from './companies/airline.component';

import { FormsModule } from '@angular/forms'
import { RentACarComponent } from './companies/rent-a-car.component';


@NgModule({
  declarations: [
    AppComponent, 
    ViewComponent,
    AirlineComponent, 
    RentACarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
