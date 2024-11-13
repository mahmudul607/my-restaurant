import ReviewSwiper from "../ReviewSwiper/ReviewSwiper";


const CustomersSay = () => {
    return (
        <div className="customers-say md:my-24 relative overflow-hidden min-[200px]:pb-8 lg:pb-12 bg-[#FBF7F2]">
            <div className="background_image md:block hidden">
                <span className="img"></span>
            </div>
            <div className="customers-say-carousel  lg:px-48 md:px-32 min-[200px]:px-2 bg-transparent  relative">
                <div className="customers-say-title bg-transparent">
                    <li className="list-style">Crispy, Every Bite Taste</li>
                    <h1 className="lg:text-2xl md:text-xl font-bold uppercase">What some of my customers say</h1>
                </div>

                
                <ReviewSwiper></ReviewSwiper>
                
            </div>
            <div className="background_image_right md:block hidden">
                <span className="img"></span>
            </div>


        </div>
    );
};

export default CustomersSay;