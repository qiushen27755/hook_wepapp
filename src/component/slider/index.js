import React,{useState,useEffect} from 'react';
import "swiper/css/swiper.css"
import {SliderContainer} from './style'
import Swiper from 'swiper'

function Slider(props){
    const [sliderSwiper, setSliderSwiper] = useState (null);
    const { swiperList } = props

    useEffect (() => {
        if (swiperList.length && !sliderSwiper){
            let n=swiperList.length
            let sliderSwiper = new Swiper(".slider-container", {
              loop: false,
              hide:true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                
              },
              pagination: {el: n===1?'null':'.swiper-pagination'},
            });
            setSliderSwiper(sliderSwiper);
        }
      }, [swiperList.length, sliderSwiper]);
    return(
        <SliderContainer>
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              swiperList.map ((slider,index) => {
                return (
                  <div className="swiper-slide" key={slider.imageUrl}>
                    <div className="slider-nav">
                      <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div> 
      </SliderContainer>
    )
}
export default Slider