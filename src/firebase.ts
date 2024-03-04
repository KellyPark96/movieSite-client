import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNEkuOKXMFsteR2vVI97KPJCHNBbFWxcI",
  authDomain: "culture-fit-e5b2b.firebaseapp.com",
  projectId: "culture-fit-e5b2b",
  storageBucket: "culture-fit-e5b2b.appspot.com",
  messagingSenderId: "511377204739",
  appId: "1:511377204739:web:ffad006ebf2d237b179036",
  measurementId: "G-R9SWJQ1VFH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
