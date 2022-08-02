// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyALjr147ZzNLG9yrbcXXA8NQid0QZ5QMNU',
    authDomain: 'coffee-app-cfc37.firebaseapp.com',
    projectId: 'coffee-app-cfc37',
    storageBucket: 'coffee-app-cfc37.appspot.com',
    messagingSenderId: '358673423255',
    appId: '1:358673423255:web:6611732aabafbf7aa7c2d2',
    measurementId: 'G-WWPV8CFL6X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, analytics, db };
export default storage;
