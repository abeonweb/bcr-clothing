import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5XjOYCj8p2IYaSu0ewZNNoC9s4bmGo0A",
    authDomain: "bcr-clothing-db.firebaseapp.com",
    projectId: "bcr-clothing-db",
    storageBucket: "bcr-clothing-db.appspot.com",
    messagingSenderId: "610952135410",
    appId: "1:610952135410:web:426c7c96e2a7970e12c66b"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if(!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch(error) {
            console.error('Error creating the user: ', error.message);
        }
        return userDocRef;
    }
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return 

    return await createUserWithEmailAndPassword(auth, email, password)
}