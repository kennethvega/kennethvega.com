import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { DocumentSnapshot, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo6uHbHWXBRTL4OMUaD3ulHowHJOWOnR0",
  authDomain: "my-portfolio-d50af.firebaseapp.com",
  projectId: "my-portfolio-d50af",
  storageBucket: "my-portfolio-d50af.appspot.com",
  messagingSenderId: "199260778708",
  appId: "1:199260778708:web:7cd56fb0f11db8399ccb41",
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
