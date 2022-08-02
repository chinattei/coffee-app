import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import Posts from '../posts/Posts';
import { User } from 'firebase/auth';
import './pages.css';

const MyPage = ({ user }: { user: User | null | undefined }) => {
    const navigate = useNavigate();
    const authUser = auth.currentUser;
    const createPostButton = () => {
        navigate('/createpost');
    };
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    });
    return (
        <div className='myPage'>
            {authUser && (
                <div className='myPage__inner'>
                    <div className='user'>
                        {authUser.photoURL && (
                            <div className='userPhoto'>
                                <img src={authUser.photoURL} alt='' />
                            </div>
                        )}
                        <p className='userName'>{authUser.displayName}</p>
                    </div>
                    <div className='library'>
                        <p className='libraryTtl'>ライブラリ</p>
                        <Posts />
                    </div>
                    <div className='addBtn'>
                        <Fab
                            color='default'
                            aria-label='add'
                            onClick={createPostButton}
                        >
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPage;
