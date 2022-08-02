import * as React from 'react';
import SignInButton from '../modules/SignInButton';
import SignOutButton from '../modules/SignOutButton';
import './Header.css';

const Header = ({ user }: { user: any }) => {
    return (
        <div className='header'>
            <ul className='navList'>
                <li className='navItem'>
                    <h1>Coffee App</h1>
                </li>
                {user ? (
                    <li className='navItem'>
                        <SignOutButton />
                    </li>
                ) : (
                    <li className='navItem'>
                        <SignInButton />
                    </li>
                )}
            </ul>
        </div>
    );
};
export default Header;
