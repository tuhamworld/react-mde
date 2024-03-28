
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcuQtZ_C1k1taYgJn02UMvKdSKBB6LzY0",
  authDomain: "de-react-notes.firebaseapp.com",
  projectId: "de-react-notes",
  storageBucket: "de-react-notes.appspot.com",
  messagingSenderId: "134111123313",
  appId: "1:134111123313:web:af013ac926b8bd583a48d0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")