import React from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import Forms from '../Forms/Forms'


function Post({id, comments, img, name, likesCount, timeAgo}) {
    return (
    <div className="post">
        <div className="info">
            <span style={{textDecoration: 'none'}}  className="user">
                <div className="profile-pic"><img src={`https://th.bing.com/th/id/OIP.NRgJJNrJhlvqRpWFwurtHQHaHa?pid=ImgDet&rs=1`} alt="" /></div>
                <p className="username">{name}</p>
            </span>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            <p className="post-time">{timeAgo}</p>
            <>
                {
                    comments.map(comment => (
                        <p className="description" key={comment.id}><span>{comment.username} </span> {comment.body}</p>
                    ))
                }
            </>
        </div>
      <Forms id={id} />
    </div>
  )
}

export default Post