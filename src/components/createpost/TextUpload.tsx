import React from 'react';
import './CreatePost.css';

const TextUpload = ({
    name,
    setName,
}: {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const nameAdd = (e: any) => {
        setName(e.target.value);
    };
    return (
        <div>
            <div className='inputPost'>
                <div className='coffeeName'>コーヒー豆の名前</div>
                <input
                    className='coffeeNameInput'
                    value={name}
                    type='text'
                    placeholder='名前を入力'
                    onChange={nameAdd}
                />
            </div>
        </div>
    );
};

export default TextUpload;
