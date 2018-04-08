import * as firebase from 'firebase';
require("firebase/firestore");


const fireStoreApp = {};


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
const storage = firebase.storage();


const db = firebase.firestore();

fireStoreApp.getStorageUrlImg = function (path) {

  const pathReference = storage.ref(path);

  pathReference.getDownloadURL().then(function (url) {
    return url;
  }).catch(function (error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object_not_found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
}



fireStoreApp.fetchObjects = (collection, dispatch, action) => {
  db.collection(collection).onSnapshot(function (snapshot) {
    // snapshot.docChanges.forEach(function (change) {

    const array = [];
    snapshot.forEach((doc) => {
      array.push(doc.data());
      // });
    });
    dispatch({
      type: action,
      payload: array.length > 1 ? array : array[0]
    });
  });
};




// fireStoreApp.fetchObjects = (collection, dispatch, action) => {
//   db.collection(collection).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       dispatch({
//         type: action,
//         payload: doc.data()
//       });
//     });
//   });
// };




fireStoreApp.createAutoID = (collection, document) => {
  db.collection(collection).add(document)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
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
