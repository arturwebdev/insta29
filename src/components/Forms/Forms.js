import React, { useRef } from 'react'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../store/slices/posts/postsSlices'
import { useSearchParams } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlice'

function Forms({id}) {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    const formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = formRef.current[0].value

        dispatch(addComment({
            postId: id,
            body,
            username: currentUser.username
        }))

        formRef.current.reset()
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </form>
    )
}

export default Forms