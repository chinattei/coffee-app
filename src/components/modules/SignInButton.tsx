import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import './Button.css';

const SignInButton = () => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {});
    };
    return <button onClick={signInWithGoogle}>Sign In</button>;
};

export default SignInButton;
