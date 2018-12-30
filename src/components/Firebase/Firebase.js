// firebase configuration code
import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzojSPZ--ndIfDU2gFXh6arzf7-ZJ-jsQ",
  authDomain: "my2app-f3ad0.firebaseapp.com",
  databaseURL: "https://my2app-f3ad0.firebaseio.com",
  projectId: "my2app-f3ad0",
  storageBucket: "my2app-f3ad0.appspot.com",
  messagingSenderId: "518422697342"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  // auth api
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
