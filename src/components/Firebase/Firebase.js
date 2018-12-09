// firebase configuration code
import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAw-t3QJeueB3PUd5Y53PSQrYTXyLWQ73I",
  authDomain: "chatapp-35a28.firebaseapp.com",
  databaseURL: "https://chatapp-35a28.firebaseio.com",
  projectId: "chatapp-35a28",
  storageBucket: "chatapp-35a28.appspot.com",
  messagingSenderId: "817781324849"
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
