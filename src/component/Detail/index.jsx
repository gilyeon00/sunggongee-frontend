import React from 'react';
import { useParams } from 'react-router-dom';
import EquipItem from '../EquipItem';
import { useSearchParams } from "react-router-dom";
import {useSelector} from "react-redux";
import './index.css'

const Detail = () => {
    let params = useParams();
    // console.log('파라미터 id', params.id)
    // console.log(params)
    const data = useSelector((state) =>state.equip.value);
    // console.log(data)
    const target = data[params.id-1]
    // console.log(target)

    return (
        <div className='main-content'>
            <h3 className='detail-equip-title'> {target.equip_title} </h3>
            <div className='detail-img-box'>
                <img className='detail-img' src={target.equip_img} alt = '' />
            </div>
            <div className='detail-description'>
                <div className='detail-description-text'>
                    <p className='detail-price'>{target.price}원</p>
                    <p>{target.equip_brand}  in {target.equip_created}</p>
                </div>
                <div className='detail-description-btn' >
                    <button className='lent-btn'>대여</button>
                </div>
            </div>
        </div>
    );

    // const [query,setQuery]  = useSearchParams();
    // const id=query.get('id')
    // const {data} = useSelector((state) => state.equip);
    // const equipData10 = data.filter((item,idx)=>idx<10)

    // return (
    //     <section className='list content'>
    //         {/* <VideoView id={id} /> */}
    //         <ul className='watch-list equip-item-row'>
    //             {
    //                 equipData10.map((item)=>(
    //                     <EquipItem 
    //                         key={item.id} 
    //                         item={item} 
    //                         value={item}
    //                     />
    //                 ))
    //             }
                
    //         </ul>
    //     </section>
    // );
};

export default Detail;