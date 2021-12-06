import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDj6fopA18dSI1jJTsljdIgqdvWp3htnzE",
    authDomain: "boca-ecommerce.firebaseapp.com",
    projectId: "boca-ecommerce",
    storageBucket: "boca-ecommerce.appspot.com",
    messagingSenderId: "644911758187",
    appId: "1:644911758187:web:124b71c331994d14fb2a2e"
  };

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
