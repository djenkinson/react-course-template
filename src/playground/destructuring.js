// Object destructuring

// const person = {
//     name: 'Samuel',
//     age: 0,
//     location: {
//         city: 'Oxford',
//         temp: 22
//     }
// }
// const { name: firstName = 'Anonymous', age, location} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self published'} = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['17 Medlock Grove', 'Didcot', 'Oxfordshire', 'OX11 7XY'];
// const [, city, county] = address;
// console.log(`You are in ${city} ${county}`);

const item = ['Tea (hot)', '£1.00', '£1.70', '£2.00'];
const [name,,medium] = item;

console.log(`A medium ${name} costs ${medium}`)

