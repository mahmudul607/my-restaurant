

import { Autoplay,  Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import foodOne from "../../assets/img/184a30047efa14c4ce6e60786c18fe6e.jfif"
import foodTwo from "../../assets/img/f92943a143d37dab4fdb66f1542f7970.png"
import foodThree from "../../assets/img/b820f37564100d79a40fa0793ded35d2.jfif"
import foodFour from "../../assets/img/c96692a063207f1692d13a65e436d78b.jfif"

const CustomSwiper = () => {

  const [slidePerview, setSlidePerview] = useState(4);

  
  useEffect(() => {


    const updateSlidePerView = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setSlidePerview(1)
        }
        else if (screenWidth < 768) {
            setSlidePerview(2)
        }
        else if (screenWidth < 1024) {
            setSlidePerview(3)
        } else {
            setSlidePerview(4)
        }
    };

    updateSlidePerView();

    window.addEventListener('resize', updateSlidePerView);
    return () => {
        window.removeEventListener('resize', updateSlidePerView);
    };
}, [])
    return (
      <div className="swiper-container lg:-top-24">
        
        <Swiper
        
        spaceBetween={30}
        
        slidesPerView={slidePerview}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
                    <SwiperSlide> <div className="item">
                        <div className="product text-center space-y-4">
                            <div className="h-[180px] relative">
                                <img src={foodOne} alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px]">
                                <h1 className="uppercase text-xl font-bold">vegetables burger</h1>
                                <p>Barbecue Italian cuisine pizza</p>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="item">
                        <div className="product text-center space-y-4">
                            <div className="h-[180px] relative">
                                <img className="w-full h-full" src={foodTwo}
                                    alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px]">
                                <h1 className="uppercase text-xl font-bold">Spacial Pizza</h1>
                                <p>Barbecue Italian cuisine pizza</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="item">
                        <div className="product text-center space-y-4">
                            <div className="relative h-[180px]">
                                <img className="w-full h-full" src={foodThree}
                                    alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px]">
                                <h1 className="uppercase text-xl font-bold">Spacial French fries</h1>
                                <p>Barbecue Italian cuisine</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="item">
                        <div className="product text-center space-y-4">
                            <div className="relative h-[180px]">
                                <img className="w-full h-full" src={foodFour}
                                    alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px] ">
                                <h1 className="uppercase text-xl font-bold">Cuisine Chicken</h1>
                                <p>Japanese Cuisine Chicken</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div className="item">
                        <div className="product text-center space-y-4">
                            <div className="h-[180px] relative">
                                <img src={foodOne} alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px]">
                                <h1 className="uppercase text-xl font-bold">vegetables burger</h1>
                                <p>Barbecue Italian cuisine pizza</p>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="item">
                        <div className="product text-center space-y-4">
                            <div className="h-[180px] relative">
                                <img className="w-full h-full" src={foodTwo}
                                    alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px]">
                                <h1 className="uppercase text-xl font-bold">Spacial Pizza</h1>
                                <p>Barbecue Italian cuisine pizza</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="item">
                        <div className="product text-center space-y-4">
                            <div className="relative h-[180px]">
                                <img className="w-full h-full" src={foodThree}
                                    alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px]">
                                <h1 className="uppercase text-xl font-bold">Spacial French fries</h1>
                                <p>Barbecue Italian cuisine</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="item">
                        <div className="product text-center space-y-4">
                            <div className="relative h-[180px]">
                                <img className="w-full h-full" src={foodFour}
                                    alt="" />
                                <div className="w-24 mx-auto border-b-4 border-red-900  bottom-0 absolute left-[30%]"></div>
                            </div>
                            <div className="detail-of-product h-[120px] ">
                                <h1 className="uppercase text-xl font-bold">Cuisine Chicken</h1>
                                <p>Japanese Cuisine Chicken</p>
                            </div>
                        </div>
                    </div></SwiperSlide>

       
      </Swiper>
      </div>

    );
};

export default CustomSwiper;