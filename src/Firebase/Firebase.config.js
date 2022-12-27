import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyAslV_CJp-Wb5pYhKXW4BNit7I6JnNE9Tg",
  authDomain: "social-book-c884f.firebaseapp.com",
  projectId: "social-book-c884f",
  storageBucket: "social-book-c884f.appspot.com",
  messagingSenderId: "89654269803",
  appId: "1:89654269803:web:f16726bd6df2b665431e2e"
};
 
const app = initializeApp(firebaseConfig);
export default app;