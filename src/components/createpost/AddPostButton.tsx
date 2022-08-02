import React from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddPostButton = ({
    name,
    setName,
    photoURL,
    setPhotoURL,
}: {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    photoURL: string;
    setPhotoURL: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const navigate = useNavigate();

    const createPost = async () => {
        if (name && photoURL) {
            await addDoc(collection(db, 'posts'), {
                coffeename: name,
                coffeephoto: photoURL,
                createdAt: Timestamp.fromDate(new Date()),
                uid: auth.currentUser?.uid,
            });
            setName('');
            setPhotoURL('');
            navigate('/mypage');
        } else {
            alert('err');
        }
    };
    return (
        <div>
            <Button onClick={createPost}>追加する</Button>
        </div>
    );
};

export default AddPostButton;
