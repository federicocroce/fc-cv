import * as firebase from 'firebase';
require("firebase/firestore");


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDINSbmIwTdqRE7yDhkow46fs3JxW5y8KM",
  authDomain: "test-74eeb.firebaseapp.com",
  databaseURL: "https://test-74eeb.firebaseio.com",
  projectId: "test-74eeb",
  storageBucket: "test-74eeb.appspot.com",
  messagingSenderId: "984496005171"
};
firebase.initializeApp(config);

const db = firebase.firestore();

// const snapshotToArray = snapshot => {
//   let returnArr = [];

//   snapshot.forEach(childSnapshot => {
//     let item = { [childSnapshot.key]: childSnapshot.val() }
//     returnArr.push(item);
//   });
//   return returnArr;
// };


const fireStoreApp = {};
// // const setFirebase = () => {

fireStoreApp.fetchObjects = (collection, dispatch, action) => {
  db.collection(collection).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      dispatch({
        type: action,
        payload: doc.data()
      });
    });
  });
};




fireStoreApp.create = (collection, document) => {
  db.collection(collection).add(document)
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}

// fireStoreApp.remove = (dbRef, key) => {
//   return dbRef.child(key).remove();
// }

// fireStoreApp.update = (dbRef, post, key) => {
//   return dbRef.child(key).update(post);
// }


// fireStoreApp.fetchObject = (dbRef, dispatch, action) => {
//   dbRef.on('value', snapshot => {
//     dispatch({
//       type: action,
//       payload: snapshot.val()
//     });
//   });
// }

// }

export default fireStoreApp;
