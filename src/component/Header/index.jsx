import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchForm from './SearchFrom';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/user/userSlice';

const Header = () => {

    const equip = useSelector(state => state.equip);
    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <div className='header'>
            <div className='header-left'>
                    <button className='menu-btn'>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                <Link to='/'>
                    <div className='logo'>
                            <img src="/image/sunggongLOGO.png" alt="logo" className='logo-img' />
                            <h1 style={{fontFamily: 'Caveat', fontWeight:800}} className='logo-title'>Sunggongee</h1>
                    </div>
                </Link>
            </div>

            <div className='header-center'>
                 <SearchForm/>
             </div>

            <div className='header-right'>
            <span className='user'>
                {/* <span className='user' onClick={()=>{navigate('/login')}} >Login</span>  */}
                    {
                        user ? 
                        <span className='user' onClick={()=>dispatch(logout(false))}>Logout</span> 
                        : <span className='user' onClick={()=>{navigate('/login')}} >Login</span> 
                    }
                </span>
            </div>
            
        </div>
    );
};

export default Header;