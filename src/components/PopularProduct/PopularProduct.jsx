import CustomSwiper from "../CustomSwiper/CustomSwiper";

const PopularProduct = () => {
    return (
        <div className="popular-product overflow-hidden my-4 relative pb-12 bg-[#FBF7F2]">
            <div className="background_image md:block hidden">
                <span className="img"></span>
            </div>
            <div className="popular-porduct-carousel lg:pl-48 md:pl-32 min-[200px]:px-6 space-y-12">
                <div className="popular-product-title pb-12">
                    <li className="list-style">Crispy, Every Bite Taste</li>
                    <h1 className="lg:text-4xl md:text-3xl font-bold uppercase">POPULAR FOOD ITEMS</h1>
                </div>

  
                <CustomSwiper></CustomSwiper>

                
            </div>

        </div>
    );
};

export default PopularProduct;