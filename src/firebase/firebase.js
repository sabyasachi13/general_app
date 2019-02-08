import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
const database =firebase.database();

export {firebase, database as default};

// database.ref('expenses')
//   .on("value",(snapshot)=>{
//     const expenses=[];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()    
//         })
//     });
//     console.log(expenses);
//   })
//setup expesnes 

// database.ref('expenses').push({
//     description :"water bill",
//     note : "",
//     amount :1000,
//     createdAt :12
// });

// database.ref('expenses').push({
//     description :"gas bill",
//     note : "",
//     amount :2000,
//     createdAt :22
// });
// database.ref('expenses').push({
//     description :"electricity bill",
//     note : "",
//     amount :3000,
//     createdAt :32
// });

// const valueChange =database.ref().on('value',(snapshot)=>{
//     const check=snapshot.val();
//     console.log(`${check.name} is a ${check.job.title} at ${check.job.company}` );
// },(e)=>{
//     console.log("some error occured",e)
// });

// database.ref('location/city')
// .once('value')
// .then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log("error occured",e)
// })


// database.ref().set({
//     name :'sabyasachi',
//     age :25,
//     stressLevel:6,
//     job :{
//         title:"system engineer",
//         company:"amd"
//     },
//     isSingle : false,
//     location :{
//         city :"cuttack",
//         country :"India"
//     }
// }).then(()=>{
//     console.log('data is saved');
// }).catch((e)=>{
//     console.log("This failed",e);
// });
// database.ref().update({
//    stressLevel : 9,
//    "job/company" : "amazon",
//    "location/city": "seattle"
// });

//database.ref('isSigle').set(null);

// database.ref().remove().then(()=>{
//     console.log("successfully removed")
// }).catch((e)=>{
//     console.log("failed to remove",e)
// });