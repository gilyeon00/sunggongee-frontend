import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className='main-content'>
        <div className='login-container'>
            <form>
                <div className='input-box'>
                    <div className='login-field'>
                            <p htmlFor='userID'>ID</p>
                            <input type="text" id="userID" placeholder="아이디 입력"></input>
                    </div>
                    <div className='login-field'>
                        <p htmlFor='userPWD'>Password</p>
                        <input type="text" id="userPWD" placeholder="비밀번호 입력"/>
                    </div>
                    <div className='login-field'>
                        <p htmlFor='userPWD'>Check</p>
                        <input type="text" id="userPWD" placeholder="비밀번호 확인"/>
                    </div>
                    <div className="login-field">
                        <p>Birth</p>
                            <div className='userBirth'>
                                <input id='user-year' type="number" placeholder="년(4자)"/>                
                                <select id='user-month'>
                                    <option value="">월</option>
                                    <option value="">1월</option>
                                    <option value="">2월</option>
                                    <option value="">3월</option>
                                    <option value="">4월</option>
                                    <option value="">5월</option>
                                    <option value="">6월</option>
                                    <option value="">7월</option>
                                    <option value="">8월</option>
                                    <option value="">9월</option>
                                    <option value="">10월</option>
                                    <option value="">11월</option>
                                    <option value="">12월</option>
                                </select>
                                <select id='user-day'>
                                    <option value="">일</option>
                                    <option value="">1일</option>
                                    <option value="">2일</option>
                                    <option value="">3일</option>
                                    <option value="">4일</option>
                                    <option value="">5일</option>
                                    <option value="">6일</option>
                                    <option value="">7일</option>
                                    <option value="">8일</option>
                                    <option value="">9일</option>
                                    <option value="">10일</option>
                                    <option value="">11일</option>
                                    <option value="">12일</option>
                                    <option value="">13일</option>
                                    <option value="">14일</option>
                                    <option value="">15일</option>
                                    <option value="">16일</option>
                                    <option value="">17일</option>
                                    <option value="">18일</option>
                                    <option value="">19일</option>
                                    <option value="">20일</option>
                                    <option value="">21일</option>
                                    <option value="">22일</option>
                                    <option value="">23일</option>
                                    <option value="">24일</option>
                                    <option value="">25일</option>
                                    <option value="">26일</option>
                                    <option value="">27일</option>
                                    <option value="">28일</option>
                                    <option value="">29일</option>
                                    <option value="">30일</option>
                                    <option value="">31일</option>
                                </select>
                            </div>
                    </div>
                </div> 
                <div>
                    <Link to='/login'>
                        <button type="submit" className='join-btn'>Join</button>
                    </Link>
                </div>
            </form>
            </div>
        </div>
    );
};

export default index;