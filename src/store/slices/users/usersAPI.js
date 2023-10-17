import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const { data: usersData } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        
        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            avatar: `https://th.bing.com/th/id/OIP.NRgJJNrJhlvqRpWFwurtHQHaHa?pid=ImgDet&rs=1`,
            followers: Math.round(Math.random() * 800 + 700),
            following: Math.round(Math.random() * 800 + 700),
            bio: Object.values(user.company).join(' '),
            posts: postsData.filter(post => post.albumId === user.id)
                            .map(post => ({
                                id: post.id + '_' + user.id,
                                img: post.url,
                                name: user.username.toLowerCase(),
                                likesCount: Math.round(Math.random() * 800 + 700),
                                postText: post.title.split(' ').slice(1).join(' '),
                                timeAgo: Math.round(Math.random() * 7 + 2) + ' Minutes Ago',
                                comments: []
                            }))
        }))

        return data
    }
)