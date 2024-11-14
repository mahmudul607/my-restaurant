import serviceImage from "../../assets/img/59d1a08b55f1f4e0621185f67f433fba.jfif";

const Services = () => {
    return (


        <div className="our-service my-4 relative overflow-hidden">
            <div className="background_image lg:block hidden">
                <span className="img"></span>
            </div>
            <div className="grid grid-cols-6  lg:mx-36 min-[200px]:mx-6 gap-8 pb-6">

                <div className="lg:col-span-3 min-[200px]:col-span-6">
                    <div className=" relative">
                        <img src={serviceImage} alt="" />
                        <div className="absolute lg:top-6 min-[200px]:top-3 left-4 bg-white rounded-2 flex ">
                            <div className="icon relative sm:p-4 min-[200px]:px-1 w-full flex">
                                <svg width="95" height="95" viewBox="0 0 95 95" fill="none"
                                    className="responsive-svg sm:w-[100px] sm:h-[100px] min-[200px]:w-[40px] min-[200px]:h-[60px] "
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.6314 2.81333C47.6314 1.51259 48.6867 0.451988 49.9858 0.51698C59.7816 1.00704 69.2025 4.5454 76.9154 10.6672C85.2446 17.2782 91.0917 26.513 93.5057 36.8692C95.9197 47.2255 94.7584 58.0939 90.2108 67.7063C85.6632 77.3187 77.9969 85.1096 68.4589 89.8115C58.921 94.5134 48.0728 95.8496 37.679 93.6028C27.2851 91.356 17.9574 85.6584 11.2131 77.4369C4.46876 69.2153 0.704788 58.9536 0.533458 48.3211C0.374804 38.4753 3.3055 28.8479 8.88229 20.7797C9.62188 19.7097 11.1058 19.5185 12.1375 20.3107C13.1693 21.1028 13.3575 22.578 12.6238 23.6521C7.69138 30.8735 5.10174 39.4628 5.24325 48.2452C5.39745 57.8145 8.78503 67.05 14.8549 74.4494C20.9248 81.8488 29.3198 86.9766 38.6742 88.9988C48.0286 91.0209 57.7921 89.8183 66.3762 85.5866C74.9603 81.3549 81.86 74.3431 85.9529 65.6919C90.0457 57.0407 91.0908 47.2592 88.9183 37.9385C86.7457 28.6179 81.4833 20.3066 73.987 14.3567C67.1072 8.89609 58.7173 5.7194 49.9856 5.23392C48.6868 5.16172 47.6314 4.11408 47.6314 2.81333Z"
                                        fill="#FEBF00" />
                                </svg>
                                <span
                                    className="fiftyPlus absolute   sm:top-14  sm:left-14 min-[200px]:left-4 min-[200px]:top-5  md:text-xl min-[200px]:text-sm font-bold">
                                    50+
                                </span>

                                <span className="absolute sm:top-8 sm:left-4 min-[200px]:left-1 min-[200px]:top-3">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                        className="responsive-svg-small sm:w-[20px] min-[200px]:w-[10px]"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8.7113" cy="8.91698" r="6.18981" fill="white" stroke="#FEBF00"
                                            strokeWidth="4" />
                                    </svg>
                                </span>
                                <div
                                    className="details text-left md:p-6 sm:p-3 min-[200px]:px-2  pl-0 sm:text-xl min-[200px]:text-sm align-content-center">
                                    <p>Market <br />
                                        Experiences</p>
                                </div>




                            </div>


                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 min-[200px]:col-span-6 ">
                    <ul className="nav nav-pills mb-3 border-b-2  border-[#ab2a1b] min-[200px]:text-sm" id="pills-tab"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-about-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about"
                                aria-selected="true">About</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-experience-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-experience" type="button" role="tab"
                                aria-controls="pills-experience" aria-selected="false">Experience</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">Contact</button>
                        </li>

                    </ul>
                    <div className="tab-content d-block" id="pills-tabContent">
                        <div className="tab-pane fade show active min-[200px]:text-xs md:text-sm lg:text-md "
                            id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab" tabIndex="0">
                            <div className="details-area space-y-4">
                                <h2 className="lg:text-3xl md:text-2xl min-[200px]:text-md font-bold uppercase">Exceptional
                                    culinary experience and delicious
                                    food</h2>
                                <p>Our restaurant serve to you a special food that make you satisfied. Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Natus, libero dignissimos? Sequi, tenetur
                                    inventore? Iste, dolores. Ducimus eligendi placeat dicta sequi labore doloribus
                                    dolorum ad quibusdam fugit ipsa. Laboriosam, quibusdam.</p>
                                <div className="flex">
                                <button className="custombutton rounded">
                                    <span className="button_curve"></span>
                                    <button className="btn rounded align-content-center "><span className="text-sm">About More</span></button>
                                    
                                </button>
                                   
                                    <div className="btn"><i className="bi bi-telephone text-[#c3596f] font-bold" /> <span>01797692607</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade min-[200px]:text-xs md:text-sm lg:text-md " id="pills-experience"
                            role="tabpanel" aria-labelledby="pills-experience-tab" tabIndex="0">
                            <div className="details-area space-y-4">
                                <h2 className="lg:text-4xl md:text-2xl min-[200px]:text-md font-bold uppercase">Dinner
                                    Experience from our Restaurant.</h2>
                                <p>You got a good experience from our restaurant. Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Natus, libero dignissimos? Sequi, tenetur
                                    inventore? Iste, dolores. Ducimus eligendi placeat dicta sequi labore doloribus
                                    dolorum ad quibusdam fugit ipsa. Laboriosam, quibusdam.</p>

                                <button className="custombutton rounded">
                                    <span className="button_curve"></span>
                                    <button className="btn rounded align-content-center">Experience More</button>
                                    
                                </button>
                                
                            </div>

                        </div>
                        <div className="tab-pane fade min-[200px]:text-xs md:text-sm lg:text-md " id="pills-contact"
                            role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                            <form >
                                <div className="flex-col flex sm:gap-4 min-[200px]:gap-2 ">
                                    <div className="w-full space-y-2">
                                        <input type="text" name="name" defaultValue="" placeholder="Your name"
                                            className="border-1 p-2 sm:w-[49.5%] min-[200px]:w-full" />
                                        <input type="text" name="email" defaultValue="" placeholder="Your email"
                                            className="border-1 p-2 sm:w-[49.5%] min-[200px]:w-full" />
                                    </div>
                                    <textarea name="message" id="" placeholder="Your Message"
                                        className="border-1"></textarea>

                                    <button className="custombutton rounded">
                                        <span className="button_curve"></span>
                                        <input className="btn rounded align-content-center" type="submit" defaultValue="Send Message" />
                                    </button>

                                </div>

                            </form>
                        </div>

                    </div>
                </div>


                <div
                    className="lg:col-span-2 md:col-span-3 h-24 min-[200px]:col-span-6    w-full align-content-center items-center flex gap-4  ">
                    <div
                        className="icon-area flex justify-content-center items-center min-[200px]:w-[50px] min-[200px]:h-[50px] md:w-[80px] md:h-[80px] lg:p-6 md:p-4 min-[200px]:p-2 text-[#BD1F17] min-[200px]:text-2xl   font-bold sm:text-4xl md:text-4xl lg:text-5xl   ">
                        <i className="bi bi-box-seam "></i>
                    </div>
                    <div className="details md:w-72 align-content-center">
                        <h2 className="uppercase font-bold">First Delivery</h2>
                        <p className="capitalize">within 30 minutes</p>
                    </div>
                </div>

                <div
                    className="lg:col-span-2 md:col-span-3 min-[200px]:col-span-6   w-full align-content-center items-center flex gap-4  ">
                    <div
                        className="icon-area flex justify-content-center items-center min-[200px]:w-[50px] min-[200px]:h-[50px] md:w-[80px] md:h-[80px] lg:p-6 md:p-4 min-[200px]:p-2 text-[#BD1F17] min-[200px]:text-2xl   font-bold sm:text-4xl md:text-4xl lg:text-5xl   ">
                        <i className="bi bi-award"></i>
                    </div>
                    <div className="details md:w-72 align-content-center">
                        <h2 className="uppercase font-bold">absolute dining</h2>
                        <p className="capitalize">Best buffet restaurant</p>
                    </div>
                </div>

                <div
                    className="lg:col-span-2 md:col-span-3 min-[200px]:col-span-6   w-full align-content-center items-center flex gap-4 ">
                    <div
                        className="icon-area flex justify-content-center items-center min-[200px]:w-[50px] min-[200px]:h-[50px] md:w-[80px] md:h-[80px] lg:p-6 md:p-4 min-[200px]:p-2 text-[#BD1F17] min-[200px]:text-2xl   font-bold sm:text-4xl md:text-4xl lg:text-5xl   ">
                        <i className="bi bi-bag "></i>
                    </div>
                    <div className="details md:w-72 align-content-center">
                        <h2 className="uppercase font-bold">pickup delivery</h2>
                        <p className="capitalize">Grab your food order</p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Services;