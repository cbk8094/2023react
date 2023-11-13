import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
function Modal(){
  return(
    <>
      <h3>안녕하세요</h3>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <ModalBody/> */}
    </>
  )
}
// function ModalBody() {
//   const pStyle = {
//     color:"red",
//     background:"skyblue"
//   }
  // return (
  //   <>
  //     <p style={ pStyle }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dignissimos.</p>
  //   </>
  // )
// }
export default Modal;