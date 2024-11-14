

import { Autoplay,  Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ReviewSwiper = () => {

    return (
        <div className="swiper-container -top-12">
        <Swiper
        
        spaceBetween={30}
    
        
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper"
      >
                
                <SwiperSlide>
                         <div className="item bg-[#FEBF00] ">
                        <div className="product text-center space-y-4">
                            <div className=" lg:h-[400px] min-[200px]:h-auto">
                                <div className="lg:flex-row-reverse lg:flex   h-full">
                                    <div className=" lg:w-[50%] min-[200px]:w-full">
                                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/7EdpBH81XIY"
                                            frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                    <div className="lg:w-[50%] relative md:p-4 min-[200px]:w-full min-[200px]:p-2">
                                        <div className="pt-4 h-full flex flex-col justify-between">

                                            <div className="pb-12 min-[200px]:text-sm p-4 text-left">
                                                <p>This restaurant food very testy and sweet to test. i visit here when
                                                    i get change to travel here.</p>
                                                <p><small>Quality and service is well.</small></p>
                                            </div>
                                            <div className="sm:px-12 min-[200px]:px-2">
                                                <div
                                                    className="flex justify-between pb-2 h-16 w-full border-b-2 border-black">
                                                    <div className="w-full text-left ">
                                                        <h2 className="uppercase font-bold min-[200px]:text-sm">Mahmudul
                                                            Hasan</h2>
                                                        <p className="min-[200px]:text-xs">Dhaka, Bangladesh</p>
                                                    </div>
                                                    <div className="w-[60px] h-[50px] card-footer">
                                                    <div className="avatar">
                                                        <div className="w-full rounded-full">
                                                        <img 
                                                            src="/src/assets/img/mahmudul.jpg" alt="" />
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item bg-[#FEBF00] ">
                        <div className="product text-center space-y-4">
                            <div className=" lg:h-[400px] min-[200px]:h-auto">
                                <div className="lg:flex-row-reverse lg:flex   h-full">
                                    <div className=" lg:w-[50%] min-[200px]:w-full">
                                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/7EdpBH81XIY"
                                            frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                    <div className="lg:w-[50%] relative md:p-4 min-[200px]:w-full min-[200px]:p-2">
                                        <div className="pt-4 h-full flex flex-col justify-between">

                                            <div className="pb-12 min-[200px]:text-sm p-4">
                                                <p>This restaurant food very testy and sweet to test. i visit here when
                                                    i get change to travel here.</p>
                                                <p><small>Quality and service is well.</small></p>
                                            </div>
                                            <div className="sm:px-12 min-[200px]:px-2">
                                                <div
                                                    className="flex justify-between pb-2 h-16 w-full border-b-2 border-black">
                                                    <div className="w-full text-left ">
                                                        <h2 className="uppercase font-bold min-[200px]:text-sm">Mahmudul
                                                            Hasan</h2>
                                                        <p className="min-[200px]:text-xs">Dhaka, Bangladesh</p>
                                                    </div>
                                                    <div className="w-[60px] h-[50px] card-footer">
                                                    <div className="avatar">
                                                        <div className="w-full rounded-full">
                                                        <img 
                                                            src="/src/assets/img/mahmudul.jpg" alt="" />
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item bg-[#FEBF00] ">
                        <div className="product text-center space-y-4">
                            <div className=" lg:h-[400px] min-[200px]:h-auto">
                                <div className="lg:flex-row-reverse lg:flex   h-full">
                                    <div className=" lg:w-[50%] min-[200px]:w-full">
                                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/7EdpBH81XIY"
                                            frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                    <div className="lg:w-[50%] relative md:p-4 min-[200px]:w-full min-[200px]:p-2">
                                        <div className="pt-4 h-full flex flex-col justify-between">

                                            <div className="pb-12 min-[200px]:text-sm p-4">
                                                <p>This restaurant food very testy and sweet to test. i visit here when
                                                    i get change to travel here.</p>
                                                <p><small>Quality and service is well.</small></p>
                                            </div>
                                            <div className="sm:px-12 min-[200px]:px-2">
                                                <div
                                                    className="flex justify-between pb-2 h-16 w-full border-b-2 border-black">
                                                    <div className="w-full text-left ">
                                                        <h2 className="uppercase font-bold min-[200px]:text-sm">Mahmudul
                                                            Hasan</h2>
                                                        <p className="min-[200px]:text-xs">Dhaka, Bangladesh</p>
                                                    </div>
                                                    <div className="w-[60px] h-[50px] card-footer">
                                                    <div className="avatar">
                                                        <div className="w-full rounded-full">
                                                        <img 
                                                            src="/src/assets/img/mahmudul.jpg" alt="" />
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </SwiperSlide>
                
                    

       
      </Swiper>
      </div>
    );
};

export default ReviewSwiper;