// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2uCWTTCAADfRYkE9WEnwFEijIxx0Gl9E",
    authDomain: "new-ecommerce-20c48.firebaseapp.com",
    projectId: "new-ecommerce-20c48",
    storageBucket: "new-ecommerce-20c48.appspot.com",
    messagingSenderId: "84169559869",
    appId: "1:84169559869:web:709580a51f6f8fe2b63f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app