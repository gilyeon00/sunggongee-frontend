import React from 'react';
import { useSelector } from 'react-redux';
import EquipList from '../component/EquipList';
import SideMenu from '../component/SideMenu';


const Search = () => {
  const {listLayout} = useSelector((state) => state.equip)

    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
          { listLayout && <EquipList display={listLayout}  /> }
          </section>
        </>
    );
};

export default Search;