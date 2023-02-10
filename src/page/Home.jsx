import React, { useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import EquipList from '../component/EquipList';
import { useDispatch, useSelector } from 'react-redux';
import { equipListLayout } from '../store/equip/equipSlice';
import HotEquipSlider from '../component/HotEquipSlider';

const Home = () => {
    const dispatch = useDispatch();
    const {listLayout} =useSelector((state) => state.equip);
  
    useEffect( () => {
      dispatch(equipListLayout('grid'))

    },[])

    return (
        <>
                <section className='main-content'>
                    <HotEquipSlider/>
                    { listLayout && <EquipList display={listLayout} /> }
                </section>
        </>
    );
};

export default Home;