//Homework02

//1
let restaurant = 'Sandyk';
restaurant = 'Ayul';
restaurant = 'Delpapa'; //Sandyk -> поменяется на Delpapa, потому что let
console.log(restaurant);

const bookRestaurant = `Make a reservation on ${restaurant}`;
console.log(bookRestaurant); //const не меняется

const customer = {
  name: 'Anel',
  dateOfBirth: '1.1.2005',
  isStudent: true,
};

console.log(customer.name);

//2
const vehicle = {};

vehicle.brandName = 'BMW';
vehicle['model'] = 'X5';
vehicle.model = 'M1';

delete vehicle.model;
console.log(vehicle);

//3
const salaries = {
  Anel: 500,
  Ayan: 600,
  Asel: 100,
  Azat: 350,
};

totalSalary = 0;

for (let name in salaries) {
  totalSalary += salaries[name];
}

console.log(totalSalary);
