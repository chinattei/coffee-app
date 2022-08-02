import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './ImageUpload.css';
import storage from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const ImagesUpload = ({
    photoURL,
    setPhotoURL,
}: {
    photoURL: string;
    setPhotoURL: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const OnFileUploadToFirebase = (e: any) => {
        const file = e.target.files[0];
        console.log('test:get file name' + file.name);
        const storageRef = ref(storage, 'images/' + file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('test:upload file');
            getDownloadURL(ref(storage, 'images/' + file.name))
                .then((url) => {
                    setPhotoURL(url);
                    console.log(photoURL);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    };
    const photoDelete = () => {
        setPhotoURL('');
    };
    return (
        <div>
            <div className='outerBox'>
                {photoURL ? (
                    <div className='upLoadImage'>
                        <img src={photoURL} alt='' />
                        <Button onClick={photoDelete}>削除</Button>
                    </div>
                ) : (
                    <>
                        <div className='title'>
                            <h2>画像アップローダー</h2>
                            <p>JpegかPngの画像ファイル</p>
                        </div>
                        <div className='imageUplodeBox'>
                            <div className='imageLogoAndText'>
                                <AddPhotoAlternateIcon />
                                <p>ここにドラッグ＆ドロップしてね</p>
                            </div>
                            <input
                                className='imageUploadInput'
                                multiple
                                name='imageURL'
                                type='file'
                                accept='.png, .jpeg, .jpg'
                                onChange={OnFileUploadToFirebase}
                            />
                        </div>
                        <p>または</p>
                        <Button variant='contained'>
                            ファイルを選択
                            <input
                                className='imageUploadInput'
                                type='file'
                                accept='.png, .jpeg, .jpg'
                                onChange={OnFileUploadToFirebase}
                            />
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImagesUpload;
