import React from 'react';
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    
    const navigate = useNavigate();
    const onSearch = (e) => {
        if(e.key === "Enter"){
            navigate(`?q=${e.target.value}`)
        }
    }

    return (
        <form className='search' >
            <input
                placeholder='검색'
                type="text"
                className='search-input'
            />
            <button className='search-btn'onKeyDown={onSearch} >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchForm;