import { auth } from "../config/firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

export const emailSignUp = async (userData) => {
    var user;
    var error;

    try {
        user = await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password,
        );
        console.log(user);
    } catch (err) {
        error = err;
    }

    return {user, error};
}

export const emailLogIn = async (userData) => {
    var user;
    var error;
    try {
        user = await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        console.log(user);
    } catch (err) {
        error = err;
    }

    return {user, error};
}

export const socialMediaAuth = async (provider) => {
    var user;
    var error;
    try {
        user = await signInWithPopup(auth, provider);
        console.log(user);
    } catch (err) {
        error = err;
        console.log(err);
    }

    return {user, error};
}