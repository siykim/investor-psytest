import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";


// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB26bEvOZ46P_mWVHccFUUiJQq17WQ-Wo",
  authDomain: "investor-psytest.firebaseapp.com",
  databaseURL: "https://investor-psytest.firebaseio.com",
  projectId: "investor-psytest",
  storageBucket: "investor-psytest.appspot.com",
  messagingSenderId: "904510418422",
  appId: "1:904510418422:web:3b321f71ef23074c202bd7",
  measurementId: "G-73MLGF6ZF2"
};



//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database()