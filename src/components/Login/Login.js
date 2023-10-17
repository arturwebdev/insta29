import React, { useRef } from "react";
import instaLogoImg from './img/instaLogo.png'
import fcbLogo from './img/fcb.png'

import './Login.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slices/users/usersAPI";
import { logIn, selectUsers } from "../../store/slices/users/usersSlice";

function Login(){
    const {currentUser, usersData} = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()

        const [{value: login}, {value: password}] = formRef.current
        
        dispatch(logIn({login, password}))
        

        formRef.current.reset()
    }

    useEffect(() => {
        if (!usersData.length) {
            dispatch(fetchUsers())
        }
    }, [])

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

    return ( 
        <div className="Login">
            <div className="container">
                <div className="box1">
                    <div className="box1Logo">
                        <img src={instaLogoImg} alt="" />
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input defaultValue={'bret'} type="text" placeholder="Phone number, username or email adress" />
                        </div>
                        <div className="inputs">
                            <input defaultValue={'gwenborough'} type="password" placeholder="Password" />
                        </div>

                        <div className="login-button">
                            <button className="loginButton"><span className='loginButton'>Login</span> </button>
                        </div>
                    </form>


                    <div className="lines-box">
                        <div className="line-1"></div>
                        <div className="or">OR</div>
                        <div className="line-1"></div>
                    </div>
                    <div className="fb-box">
                        <span>
                            <img src={fcbLogo} alt="" className="fb-logo"/>
                            <p className="fb-link">Log in with Facebook</p>
                        </span>
                    </div>
                    <div className="forgott-password-box">
                        <p className="password-link">Forgotten your password?</p>
                    </div>
                </div>
    {/* ---------------------------------------------- */}
                <div className="box2">
                    <p>
                        Don't have an account? <span className="sign-up">Sign up</span>
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Login