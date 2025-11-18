import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQLlhFnwg5vaOoOgVflkc4HWJ6P8S-VBM",
  authDomain: "bloomind-health-app.firebaseapp.com",
  projectId: "bloomind-health-app",
  storageBucket: "bloomind-health-app.firebasestorage.app",
  messagingSenderId: "534286286674",
  appId: "1:534286286674:web:3351422fd288a20be9048b",
  measurementId: "G-4QNP4243FG",
};

const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | undefined;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (err) {
    console.warn("Firebase analytics not initialized:", (err as Error).message);
  }
}
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, auth, firestore, analytics };
export default app;
