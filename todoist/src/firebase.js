import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDW6IcR93nLTS9fYOuChAOOav2clM5NGeQ",
    authDomain: "todoist-e9b2c.firebaseapp.com",
    databaseURL: "https://todoist-e9b2c.firebaseio.com",
    projectId: "todoist-e9b2c",
    storageBucket: "todoist-e9b2c.appspot.com",
    messagingSenderId: "325179680589",
    appId: "1:325179680589:web:399bc7c815f69067deb904"
});

export { firebaseConfig as firebase };