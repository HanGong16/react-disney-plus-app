import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGE_SENDER,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
