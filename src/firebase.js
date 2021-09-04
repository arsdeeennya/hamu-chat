import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDzDEfmHoWpu75LtjUo6rKtuDP8Lh7wuH4",
  authDomain: "idobatakaigi-with-ham-for.firebaseapp.com",
  databaseURL: "https://idobatakaigi-with-ham-for-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-with-ham-for",
  storageBucket: "idobatakaigi-with-ham-for.appspot.com",
  messagingSenderId: "851884860909",
  appId: "1:851884860909:web:e2631de642d50c9e40b3e4"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};