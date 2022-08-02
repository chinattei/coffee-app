import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInButton from '../modules/SignInButton';
import { User } from 'firebase/auth';
import './pages.css';

const MyPage = ({ user }: { user: User | null | undefined }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/mypage');
        }
    });
    return (
        <div className='home'>
            <div className='home__inner'>
                <h2>自分の「コーヒー豆図鑑」を作ってみよう！</h2>
                <h3 className='text'>
                    自分のオリジナル「コーヒー豆図鑑」を作ることができます！オリジナルタグを作成して管理したり、味の傾向を記録することができます。今まで飲んだことのあるコーヒー豆を記録して自分だけの「コーヒー図鑑」を作ってみよう！
                </h3>
                <div className='signInBtn__area'>
                    <p>ログインして今すぐStart！</p>
                    <SignInButton />
                </div>
            </div>
        </div>
    );
};

export default MyPage;
