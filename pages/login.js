// import React from 'react'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Result } from "postcss";
import { auth, authProvider } from "../lib/firebase";
import { useState } from "react";

const Login = () => {

    const [message, setMessage] = useState("");

    const onLogin = () => {
        signInWithPopup(auth, authProvider).then((result) => {

            const credential = GoogleAuthProvider.credential(result);
            const token = credential.accessToken;
            const user = result.user;

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

        })
    }
    return (
        <div className="p-2 m-3 max-w-xs sm:max-w-sm  bg-slate-700 mx-auto h-56 rounded-lg flex items-center justify-center">

            <div>
                <button onClick={onLogin} className="rounded-full bg-blue-600 p-3">
                    Login With Google
                </button>
            </div>

        </div>
    )
}
export default Login;