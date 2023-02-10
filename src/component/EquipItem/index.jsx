import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { unitCheck } from '../../lib/unitCheck';

const EquipItem = ({item}) => {

    const navigate = useNavigate();
    const goToDetail = () => {
        navigate(`/equip/${item.id}`)
    }

    return (
        <div className='equip-item equip-item-grid'>
            {/* <div className='equip-main' onClick={() => {goToDetail()}}> */}
                <div className='equip-img-box' onClick={() => {goToDetail()}} >
                    <img 
                        src = {item.equip_img}
                        alt = "equip"
                        className='equip-img'/>
                </div>
                <div className='description-box'>
                    <div className='equip-name'>{item.equip_title}</div>
                    <div className='equip-price'>{unitCheck(item.price)}</div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default EquipItem;