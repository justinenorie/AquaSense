// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCSxMoC0UmEprBwHPV42uWXF5E03WcPVzo",
    authDomain: "waterlevelderictory.firebaseapp.com",
    databaseURL: "https://waterlevelderictory-default-rtdb.firebaseio.com",
    projectId: "waterlevelderictory",
    storageBucket: "waterlevelderictory.firebasestorage.app",
    messagingSenderId: "275405352702",
    appId: "1:275405352702:web:3a1672f7e14d60e667ffaf",
    measurementId: "G-ZPV53T6H1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth, db, rtdb };
