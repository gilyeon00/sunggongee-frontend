import React from 'react';
import './index.css'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/user/userSlice';

const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(login(true));
        navigator('/')          //   함수로 쓸때는 Link를 못쓰니 navigator사용
    }

    return (
        <div className='main-content'>
        <div className='login-container'>
            <form onSubmit={(e)=> {loginUser(e)}} >
                <div className='input-box'>
                <div className='login-field'>
                        <p htmlFor='userID'>ID</p>
                        <input type="text" id="userID" placeholder="아이디 입력"></input>
                </div>
                <div className='login-field'>
                    <p htmlFor='userPWD'>Password</p>
                    <input type="text" id="userPWD" placeholder="비밀번호 입력"/>
                </div>
                </div>
                <div>
                    <button type="submit" className='login-btn'>Login</button>
                    <Link to='/join'>
                        <button type="submit" className='join-btn'>Join</button>
                    </Link>
                </div>
            </form>
            </div>
        </div>
    );
};


export default Login;