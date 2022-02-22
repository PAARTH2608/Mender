import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOoOgEYIVeciFN009uEMPaxmCZp9Y8-o8",
  authDomain: "mender-2c026.firebaseapp.com",
  projectId: "mender-2c026",
  storageBucket: "mender-2c026.appspot.com",
  messagingSenderId: "596712325462",
  appId: "1:596712325462:web:bc043e6bf1f74d0ab916f7",
}

// export const auth = App.auth();
firebase.initializeApp(firebaseConfig)
export { firebase };