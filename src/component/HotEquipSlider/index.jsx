// https://swiperjs.com/react
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components'
import './index.css'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HotEquipSlider = () => {
    return (
        <>
        <h2 className='slider-title'>Today's HOT item</h2>
        <EquipSliderBox>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}

                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction:false,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev'
                }}
            >
                <SwiperSlide><img className='slide-img' src ="./image/slide/1.png" alt=""/></SwiperSlide>
                <SwiperSlide><img className='slide-img' src ="./image/slide/2.png" alt=""/></SwiperSlide>
                <SwiperSlide><img className='slide-img' src ="./image/slide/3.png" alt=""/></SwiperSlide>
                <SwiperSlide><img className='slide-img' src ="./image/slide/4.png" alt=""/></SwiperSlide>
                <SwiperSlide><img className='slide-img' src ="./image/slide/5.jpeg" alt=""/></SwiperSlide>
                <SwiperSlide><img className='slide-img' src ="./image/slide/6.jpeg" alt=""/></SwiperSlide>
                <SwiperSlide><img className='slide-img' src ="./image/slide/7.png" alt=""/></SwiperSlide>
                {/* <NaviPrev className="prev"/>
                <NaviNext className="next"/>  */}
            </Swiper>
        </EquipSliderBox>
        </>
    );
};

export default HotEquipSlider;


const EquipSliderBox = styled.div `
    width: 1000px;
    height: auto;
    margin: 2rem auto;
    & .swiper-slide img{
        width: 150px;
    }
`

const NaviPrev=styled.button`
    background: url(./image/prev.jpeg) no-repeat center;
    width: 70px; height: 70px;
    position: absolute;
    top: 30%;
    let: 90px;
    transform: translateY(-50%);    // 본인 높이의 50% 위로 올라감
    z-index: 999;
    border: none;
`

const NaviNext=styled(NaviPrev)`
    background: url(./image/next.jpeg) no-repeat center;
    left: auto;
    right: 50px;
`