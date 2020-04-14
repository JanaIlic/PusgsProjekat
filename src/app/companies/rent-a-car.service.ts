import { RentACar } from './rent-a-car';
import { Car } from './car';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RentACarService{

    constructor(){}

    mockedRentACars(){
        let rentacars = new Array<RentACar>();

        rentacars.push(new RentACar('Nista GSP', 'nistagsp.com', 'nako, nije lose', 1 ));
        rentacars.push(new RentACar('Samo kamilom', 'samo.kamilom', 'vrh', 5));
        
        return  rentacars;
    }

    loadRentACars(){
        return this.mockedRentACars();
    }

    loadCars(){
        let allCars = new Array<Car>();
        
        allCars.push(new Car('Lada'));
        allCars.push(new Car('Yugo'));
        allCars.push(new Car('Zastava'));
        allCars.push(new Car('Mercedes'));
        allCars.push(new Car('BMW'));
        allCars.push(new Car('Fiat'));
        allCars.push(new Car('Ferrari'));

        return allCars;
    }
}