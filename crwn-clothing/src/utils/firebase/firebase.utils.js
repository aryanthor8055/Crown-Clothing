import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCf3KPBSW7beGLtIxks3BAzDkhPgo8AjhM",
    authDomain: "crwn-clothing-db-f1a7d.firebaseapp.com",
    projectId: "crwn-clothing-db-f1a7d",
    storageBucket: "crwn-clothing-db-f1a7d.appspot.com",
    messagingSenderId: "699976679670",
    appId: "1:699976679670:web:49419dc6a63319d2ed6cd7"
};


const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

