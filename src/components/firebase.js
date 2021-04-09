import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-8HifA-ZWwCKbs8RdV4wdiC7UvFKFJBk",
  authDomain: "shah-cricket-academy-8c04c.firebaseapp.com",
  databaseURL: "https://shah-cricket-academy-8c04c-default-rtdb.firebaseio.com",
  projectId: "shah-cricket-academy-8c04c",
  storageBucket: "shah-cricket-academy-8c04c.appspot.com",
  messagingSenderId: "790205741880",
  appId: "1:790205741880:web:5abd6561cc6f8e59929fcd",
  measurementId: "G-6T7VHL6VK6",
});

const db = firebaseApp.firestore();

export default db;
