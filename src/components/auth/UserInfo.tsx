import React from 'react';
import { auth } from '../../firebase';
const authUser = auth.currentUser;
if (authUser) {
    const displayName = authUser.displayName;
    const email = authUser.email;
    const photoURL = authUser.photoURL;
    const uid = authUser.uid;
}
