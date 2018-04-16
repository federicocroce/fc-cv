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

      const newDoc = doc.data();
      newDoc.id = doc.id;
      array.push(newDoc);

    });
    dispatch({
      type: action,
      payload: array.length > 1 ? array : array[0]
    });
  });
};

fireStoreApp.removeItem = (collection, id) => {
  db.collection(collection).doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}


fireStoreApp.hadleAuth = (dispatch, action) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const login = {
      user: result.user,
      loginState: true
    }
    dispatch({
      type: action,
      payload: login
    });
    dispatch({
      type: "SET_MEASSAGES",
      payload: result.user.displayName + "Se ha logeado correctamente"
    });
    // var token = result.credential.accessToken;
    // // The signed-in user info.
    // var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}


fireStoreApp.onAuthStateChanged = (dispatch, action) => {
  firebase.auth().onAuthStateChanged(user => {
    const login = {
      user: {},
      loginState: true
    }
    if (user) {
      login.user = user;
      dispatch({
        type: action,
        payload: login
      });
    }
    else {
      login.loginState= false;
      dispatch({
        type: action,
        payload: login
      });
    }

  });
};

fireStoreApp.signOut = (dispatch, action) => {
  firebase.auth().signOut().then(() => {
    const login = {
      user: {},
      loginState: false
    }
    dispatch({
      type: action,
      payload: login
    });
  }).catch(function (error) {
    // An error happened.
  });
}



fireStoreApp.createAutoID = (collection, document) => {
  db.collection(collection).add(document)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}



export default fireStoreApp;
