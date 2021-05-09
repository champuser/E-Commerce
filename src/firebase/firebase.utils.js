import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: "AIzaSyAqLu72FSGg3UCS6VJPfb6OKKGt7vLjID0",
        authDomain: "shopping-app-db-62c32.firebaseapp.com",
        projectId: "shopping-app-db-62c32",
        storageBucket: "shopping-app-db-62c32.appspot.com",
        messagingSenderId: "412694562402",
        appId: "1:412694562402:web:67a9f4f5682234091db33b",
        measurementId: "G-LZF38M7H0T"
      
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;