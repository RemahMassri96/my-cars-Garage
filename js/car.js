'use strict';

let cars =[];

function Car(carModel, carYear, CarManuefact) {
    this.carModel = carModel;
    this.carYear = carYear;
    this.CarManuefact = CarManuefact;
    cars.push(this);
  }

  var table = document.getElementById('cars');
  for (let i =0; i<cars.length; i++){
    var th = document.createElement('th');
    th.innerHTML = 'my cars garag';
    table.appendChild(th);
    var tr = document.createElement('tr');
    table.appendChild(tr);
  }

  var firstCar = new Car('BMW', 1998,'Germany');
  var secondCar = new Car('KIa', 1998,'usa');
  var thirdCar = new Car('bla bla', 8989, 'korta');
  var forthCar = new Car('cartest',8987,'jaban');

 function calculatePrice(max, min){
    return Math.random() * (max - min) + min;

}


window.localStorage.setItem('bmw',2019, 'Obaseki Nosa');
window.localStorage.getItem('bmw');

window.localStorage.clear();



