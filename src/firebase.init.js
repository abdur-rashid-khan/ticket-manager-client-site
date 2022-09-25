// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfpy_7DzzcOYQYrLcF98p3jRzQatl4zxA",
  authDomain: "ticket-manager-9f345.firebaseapp.com",
  projectId: "ticket-manager-9f345",
  storageBucket: "ticket-manager-9f345.appspot.com",
  messagingSenderId: "851110413668",
  appId: "1:851110413668:web:30231692af5b16d174e671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;