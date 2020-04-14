import { Component, OnInit } from "@angular/core";
import { Airline } from "src/app/companies/airline"
import { AirlineService } from "src/app/companies/airline.service";
import { Flight } from './flight';

@Component({
    selector: 'airlines',
    templateUrl: '../companies/airlines.component.html',
    styleUrls: ['./airline.component.css']
})

export class AirlineComponent {

    airlines: Array<Airline>;
    selectedAirline: Airline;
    flights : Array<Flight>;

    num: number;
    

    constructor(private airlineService: AirlineService){
        this.airlines = new Array<Airline>();
        this.selectedAirline = new Airline('',0,'','');
      
        this.flights = new Array<Flight>();
    }

    loadAirlines() : void{
        this.airlines = this.airlineService.loadAirlines();
    }

    onSelect(ac: Airline): void{
        this.selectedAirline = ac;
        this.num = Math.random() * 5;
    }

    loadFlights() : void{
        this.selectedAirline.flights = this.airlineService.loadFlights().slice(this.num, this.num+5);
    }

}