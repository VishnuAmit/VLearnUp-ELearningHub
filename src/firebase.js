// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7tmEIE5foK8TU5AfK5jMJtEysvUWa-Bg",
  authDomain: "e-learning-app-3a7bb.firebaseapp.com",
  projectId: "e-learning-app-3a7bb",
  storageBucket: "e-learning-app-3a7bb.appspot.com",
  messagingSenderId: "584846331451",
  appId: "1:584846331451:web:204228d205c9ea4cef961e",
  measurementId: "G-GKXJMH46YJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// // Import the functions you need from the Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"; // Import Firestore
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD7tmEIE5foK8TU5AfK5jMJtEysvUWa-Bg",
//   authDomain: "e-learning-app-3a7bb.firebaseapp.com",
//   projectId: "e-learning-app-3a7bb",
//   storageBucket: "e-learning-app-3a7bb.appspot.com",
//   messagingSenderId: "584846331451",
//   appId: "1:584846331451:web:204228d205c9ea4cef961e",
//   measurementId: "G-GKXJMH46YJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);
// const auth = getAuth(app);
// // Export Firestore instance to use in other files
// export { db,auth };
