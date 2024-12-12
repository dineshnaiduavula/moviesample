import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// Firebase configurations
const firebaseConfigOne = {
  apiKey: 'AIzaSyDpHI8ITLqJ4NCllmRl8XjD3Cqmza2yeUM',
  authDomain: 'keepcallings.firebaseapp.com',
  databaseURL:'https://keepcallings-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'keepcallings',
  storageBucket: 'keepcallings.appspot.com',
  messagingSenderId: '286050839087',
  appId: '1:286050839087:web:5ffbb8020c6e20612e34da',
  measurementId: 'G-PMDNE4BJZF',}

const firebaseConfigTwo = {
  apiKey: 'AIzaSyAnotherKey',
  authDomain: 'anotherapp.firebaseapp.com',
  databaseURL:'https://anotherapp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'anotherapp',
  storageBucket: 'anotherapp.appspot.com',
  messagingSenderId: '123456789012',
  appId: '1:123456789012:web:abcdef123456',
  measurementId: 'G-EXAMPLE1234',};

// Determine which configuration to use
const searchParams = new URLSearchParams(window.location.search);
const theater = searchParams.get('');
let firebaseConfig
if(theater=='one'){ firebaseConfig=firebaseConfigOne}
else if(theater=='two'){ firebaseConfig=firebaseConfigTwo}
else if(theater=='three'){firebaseConfig=firebaseConfigTwo}
else{
  firebaseConfig=firebaseConfigOne
  //need to write code
  // navigate("/error");
}
// const firebaseConfig = theater === 'two' ? firebaseConfigTwo : firebaseConfigOne;
// // eslint-disable-next-line no-constant-condition
// if(1>=0){console.log(theater)}
// else{console.log('two')}
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
