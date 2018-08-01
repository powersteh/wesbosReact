import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZYmNhhjCBex21FiBAel_znch_CyVnkRE",
    authDomain: "catch-of-the-day-88674.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-88674.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

//this is a named export
export { firebaseApp };

//this is a default export
export default base;