import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

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


export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    //if user data doesn't exists
    //create/ set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    //if user data exists
    return userDocRef;

    //return userDocRef
}

