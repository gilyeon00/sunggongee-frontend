import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHouse, faFire, faHeart, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideMenu = () => {
    return (
        <div className='side-menu'>
            <Link to='/'>
                <button className='side-btn'>
                    <FontAwesomeIcon className='side-icon' icon={faHouse} />
                    HOME
                </button>
            </Link>
            <button className='side-btn'>
                <FontAwesomeIcon className='side-icon' icon={faUser} />
                MY
            </button >
            <button className='side-btn'>
                <FontAwesomeIcon className='side-icon' icon={faFire} />
                HOT
            </button>
            <button className='side-btn'>
                <FontAwesomeIcon className='side-icon' icon={faHeart} />
                NEW
            </button>
            <button className='side-btn'>
                <FontAwesomeIcon className='side-icon' icon={faBoxesStacked} />
                보관함
            </button>
        </div>

    );
};

export default SideMenu;