import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { DocumentSnapshot, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "minimalist-portfolio-74074.firebaseapp.com",
  projectId: "minimalist-portfolio-74074",
  storageBucket: "minimalist-portfolio-74074.appspot.com",
  messagingSenderId: "1094049568737",
  appId: "1:1094049568737:web:7a6f2ab52be857db5824a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };

// helper
// convert post to json
export function postToJSON(doc: DocumentSnapshot) {
  const data = doc.data();
  return {
    ...data,
  };
}
