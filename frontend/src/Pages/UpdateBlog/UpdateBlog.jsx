import styles from './UpdateBlog.module.css'
import { useState , useEffect} from "react";
import {updateBlog , getBlogById} from '../../api/internal';
import { useSelector } from "react-redux";
import TextInput from '../../components/TextInput/TextInput';
import { useNavigate, useParams } from "react-router-dom";

function UpdateBlog(){
    const params = useParams();
    const blogId =params.id

    const [title , setTitle] = useState('');
    const [content , setContent] = useState('');
    const [photo , setPhoto] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        async function getBlogDetails(){
          
            const response = await getBlogById(blogId);
            if(response.status === 200){
                console.log(response.data.blog)
                setContent(response.data.blog.content);
                setPhoto(response.data.blog.photo);
                setTitle(response.data.blog.title);
            }
        }
        getBlogDetails();
    },[])

    const author = useSelector(state=>state.user._id);
    const updateHandler = async ()  =>{
        let data;
        if(photo.includes('http')){
            data = {
                author , title , content  , blogId
            };
        }
        else{
            data = {
                author , title , content , photo , blogId
            };

        }
         

        const response = await updateBlog(data)
        if(response.status === 200){
            navigate('/')
        }
    }

    const getPhoto = (e) =>{
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onloadend = () =>{
            setPhoto(Reader.result)
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Update a Blog!</div>
            <TextInput
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{width: '60%'}}/>
            <textarea
            className={styles.content}
            placeholder="Your Content goes here"
            maxLength={400}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.photoPrompt}>
                <p>Choose a Photo</p>
                <input
                type="file"
                name="photo"
                id="photo"
                accept="image/jpg , image/jpeg , image/png"
                onChange={getPhoto}/>
                 <img src={photo} width={150} height={150} alt=""/> 
            </div>

            <button className={styles.submit} onClick={updateHandler}
            > Update</button>
        </div>

    )
}

export default UpdateBlog