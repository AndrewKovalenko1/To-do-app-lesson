import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDWXPxb9G5Y2NcdyqmTNaANJCrNJvoGhKQ",
  authDomain: "to-do-app-82d9e.firebaseapp.com",
  databaseURL: "https://to-do-app-82d9e.firebaseio.com",
  projectId: "to-do-app-82d9e",
  storageBucket: "to-do-app-82d9e.appspot.com",
  messagingSenderId: "60415200919",
  appId: "1:60415200919:web:e03c8e5094f1139263a3d2",
  measurementId: "G-ZR1DZRWZTY",
  }
  firebase.initializeApp(config);
  const database = firebase.database().ref("/");
  export default database;