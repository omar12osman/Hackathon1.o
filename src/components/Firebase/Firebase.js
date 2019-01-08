// firebase configuration code
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCZ332C4JorqVWCri1UpwLkGWtz9dnhtUg",
  authDomain: "appcreation-f0f9d.firebaseapp.com",
  databaseURL: "https://appcreation-f0f9d.firebaseio.com",
  projectId: "appcreation-f0f9d",
  storageBucket: "appcreation-f0f9d.appspot.com",
  messagingSenderId: "121881559636"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // auth api
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
