import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCXnS4JPWsSUWh0WKFIYePZ5TVITihKheg",
  authDomain: "jjhong922-personal-website.firebaseapp.com",
  databaseURL: "https://jjhong922-personal-website.firebaseio.com",
  projectId: "jjhong922-personal-website",
  storageBucket: "jjhong922-personal-website.appspot.com",
  messagingSenderId: "134310551512",
  appId: "1:134310551512:web:d372da0e90c82978ab5cad",
  measurementId: "G-DHLX0T7Q72"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
