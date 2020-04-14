import { Component, OnInit } from "@angular/core";
import { RentACar } from "src/app/companies/rent-a-car";
import { RentACarService } from "src/app/companies/rent-a-car.service";


@Component({
    selector: 'rent-a-car',
    templateUrl: '../companies/rent-a-car.component.html'

})

export class RentACarComponent{

    rentACars: Array<RentACar>;
    selectedRentACar: RentACar;
    num: number;

    constructor(private rentACarService: RentACarService){
        this.rentACars = new Array<RentACar>();
        this.selectedRentACar = new RentACar('','','',0);
    }

    loadRentACars() : void{
        this.rentACars = this.rentACarService.loadRentACars();
    }

    onSelect(rc: RentACar): void{
        this.selectedRentACar = rc;
        this.num = Math.random() * 5;
    }

    loadCars(): void{
        this.selectedRentACar.cars = this.rentACarService.loadCars().slice(this.num, this.num+5);
    }


}