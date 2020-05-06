import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RentACarComponent } from './companies/rent-a-car.component';
import { AirlineComponent } from './companies/airline.component';
const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: ViewComponent
},
{
  path: 'rentacar',
  component: RentACarComponent
},

{ 
  path: 'airline',
  component: AirlineComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

