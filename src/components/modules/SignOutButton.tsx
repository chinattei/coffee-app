import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Button.css';

const SignOutButton = () => {
    const signOutWithGoogle = () => {
        signOut(auth);
    };
    return <button onClick={signOutWithGoogle}>Sign Out</button>;
};

export default SignOutButton;
