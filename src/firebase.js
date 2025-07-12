// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQGrJjjnx39-gRJX_suVQFYeVCTe-14dA",
//   authDomain: "krishna-portfolio-fc08d.firebaseapp.com",
//   projectId: "krishna-portfolio-fc08d",
//   storageBucket: "krishna-portfolio-fc08d.firebasestorage.app",
//   messagingSenderId: "968946845585",
//   appId: "1:968946845585:web:cb8860bb2e058516763c30"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore ke liye import

const firebaseConfig = {
  apiKey: "AIzaSyAQGrJjjnx39-gRJX_suVQFYeVCTe-14dA",
  authDomain: "krishna-portfolio-fc08d.firebaseapp.com",
  projectId: "krishna-portfolio-fc08d",
  storageBucket: "krishna-portfolio-fc08d.firebasestorage.app",
  messagingSenderId: "968946845585",
  appId: "1:968946845585:web:cb8860bb2e058516763c30"
};

const app = initializeApp(firebaseConfig);

// ✅ Yahi export bhool gaya tha
const db = getFirestore(app);
export { db };
