import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Home from './components/pages/Home';
import MyPage from './components/pages/MyPage';
import CreatePost from './components/pages/CreatePost';

const App = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Header user={user} />
            <div>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home user={user} />}></Route>
                        <Route
                            path='/mypage'
                            element={<MyPage user={user} />}
                        ></Route>
                        <Route
                            path='/createpost'
                            element={<CreatePost user={user} />}
                        ></Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default App;
