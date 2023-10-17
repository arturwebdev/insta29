import React, { useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { convertImgBase64 } from '../../helpers/converters';
const CreatePost = () => {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const [{files: [file]}, {value: aboutText}] = formRef.current
        const img = await convertImgBase64(file)

        dispatch({type: 'addPost', payload: {img, aboutText}})
        navigate('/')
        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                <label className="input-file">
                    <input type="file" name="file"/>		
                    <span>Выберите файл</span>
                </label> 
                <br/><br/>

                {/* <input type="text" placeholder='url' /><br/><br/> */}
                <input type="text" placeholder='about text' /><br/><br/>
                <button>add post</button>
            </form>
        </div>
    );
}

export default CreatePost;
