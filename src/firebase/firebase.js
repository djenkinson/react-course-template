import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: "1:1026254274973:web:c23cb2d97b9f690a316f74",
    // measurementId: "G-VQ4CZJ8XX0"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// const expenses = database.ref('expenses');

// // child removed
// expenses.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child changed
// expenses.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child added
// expenses.on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// expenses.on('value', (snapshot) => {
//       const expensesArr = [];

//       snapshot.forEach((childSnapshot) => {
//         expensesArr.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       });

//       console.log(expensesArr);
//   }, (e) => {
//     console.log('Error loading data', e);
// });

// database.ref().remove();

// expenses.push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('notes/-MLDUFLgrgEocpCH3q1e').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref('notes').set(firebaseNotes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error loading data', e);
// });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error loading data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(42);
// }, 10500);

// database.ref('job/title')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//   database.ref().set({
//     name: 'Dan Jenkinson',
//     age: 35,
//     stressLevel: 7,
//     job: {
//         title: 'None',
//         company: 'Unemployed'
//     },
//     location: {
//         city: 'Oxford',
//         country: 'Great Britain!'
//     }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed');
//     console.log(e);
//   });
  
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'London'
//   });

// database.ref().remove().then(() =>{
//     console.log('Removed isSingle');
// }).catch((e) => {
//     console.log('Error', e);
// })