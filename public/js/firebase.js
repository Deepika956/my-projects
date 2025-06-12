let firebaseConfig = {
  apiKey: "AIzaSyCJu_BX51Z34MpCCSv2xK3tLbpjCT-NCAo",

  authDomain: "blogsite-6f784.firebaseapp.com",

  projectId: "blogsite-6f784",

  storageBucket: "blogsite-6f784.appspot.com",

  messagingSenderId: "899030599079",

  appId: "1:899030599079:web:15e5a8ab4a3e80b0e0a282"

};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

let auth=firebase.auth();

const logoutUser=() =>{
  auth.signOut();
  location.reload();
}