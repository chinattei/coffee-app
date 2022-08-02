import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import './Posts.css';

type coffeeData = {
    coffeename: string;
    coffeephoto: string;
    uid: string;
};
const Posts = () => {
    const [postList, setPostList] = useState<coffeeData[]>([]);
    useEffect(() => {
        const getData = async () => {
            const q: any = query(
                collection(db, 'posts'),
                where('uid', '==', auth.currentUser?.uid)
            );
            const querySnapshot: any = await getDocs(q);
            const posts: any = [];
            querySnapshot.forEach((doc: any) => {
                posts.push(doc.data());
            });
            setPostList(posts);
        };
        getData();
    }, []);

    return (
        <div className='posts'>
            {postList.map((post) => {
                return (
                    <div className='post' key={post.coffeename}>
                        <div className='postImage'>
                            <img src={post.coffeephoto} alt='' />
                        </div>
                        <div className='postName'>{post.coffeename}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
