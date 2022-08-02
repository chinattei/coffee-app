import TextUpload from '../createpost/TextUpload';
import { useNavigate } from 'react-router-dom';

import ImagesUpload from '../createpost/ImagesUpload';
import AddPostButton from '../createpost/AddPostButton';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

const CreatePost = ({ user }: { user: User | null | undefined }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    });
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    return (
        <div className='createPost'>
            <h2 className='createPostTtl'>コーヒを追加</h2>
            <TextUpload name={name} setName={setName} />
            <ImagesUpload photoURL={photoURL} setPhotoURL={setPhotoURL} />
            <AddPostButton
                name={name}
                setName={setName}
                photoURL={photoURL}
                setPhotoURL={setPhotoURL}
            />
        </div>
    );
};

export default CreatePost;
