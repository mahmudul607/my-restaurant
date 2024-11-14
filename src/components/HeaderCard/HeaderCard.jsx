

const HeaderCard = () => {
    return (
        <div className="header-section min-h-screen -top-16 relative">


        <div
            className="header-offer-section min-[200px]:px-4 lg:px-24   justify-center text-white  relative z-40 md:top-32 lg:top-32 min-[200px]:top-16 lg:max-w-screen-xl lg:mx-auto">
            <div className="md:flex  offer-card">
                <div className="item md:w-[50%]  ">
                    <div className="details lg:pl-16 md:pl-2 flex flex-col">
                        <h1
                            className="md:text-4xl sm:text-3xl text-2xl card-title md:absolute font-extrabold top-16 lg:w-[45%] md:w-[60%] uppercase   py-2 pr-2   ">
                            Taste the authentic
                            Saudi cuisine</h1>
                        <p className="lg:mt-44 md:mt-48">Among the best Saudi chefs in the world, serving you something
                            beyond flavor </p>
                        <button className="  custombutton mt-4 w-32">
                            <span className="button_curve "></span>
                            <div className="btn">Explore Menu</div>
                        </button>
                    </div>
                </div>
                <div className="item  md:w-[50%] relative my-4 ">
                    <div className="min-[200px]:p-0 offer-img-item relative -z-50">
                        <img className="w-full h-full md:p-0 min-[200px]:p-0"
                            src="/src/assets/img/134a1d5ba19b25b4daf3a6c032ddbd7a.jfif" alt=""/>
                        <span
                            className="star-svg absolute max-sm:-z-10 md:-top-8 min-[200px]:-top-4  lg:-right-6 min-[200px]:-right-2 md:-right-2">
                            <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>
                        </span>
                        <span
                            className="flex justify-center items-center rounded-full sm:w-32 sm:h-32 min-[200px]:w-16 min-[200px]:h-16 min-[200px]:p-2  sm:p-4 bg-[#FEBF00] absolute lg:bottom-0 md:bottom-2   min-[200px]:bottom-0 lg:-right-12 md:-right-4  min-[200px]:-right-2">
                            <div
                                className="sm:text-xl min-[200px]:text-xs sm:p-4 min-[200px]:p-2 rounded-full uppercase border-2 border-dotted border-red-600 ">
                                <span className="text-red-600">Today Offer</span>
                            </div>

                        </span>


                    </div>


                </div>
            </div>
        </div>

    </div>
    );
};

export default HeaderCard;