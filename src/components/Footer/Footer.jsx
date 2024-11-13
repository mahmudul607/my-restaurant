

const Footer = () => {
    return (
        <div className="footer-area  ">
            <div className="bg-img pb-12">
                <div className="main-area text-center space-y-12 lg:pt-48 md:pt-32 min-[200px]:pt-4 text-white">
                    <div className="title">
                        <h1 className="lg:text-4xl md:text-2xl uppercase font-bold">We ready to have you the best dining
                            experiences</h1>
                    </div>
                    <div className="we-meet grid gap-4 grid-cols-4">
                        <div className="item lg:col-span-1 min-[200px]:col-span-4 md:col-span-2">
                            <i
                                className="bi text-[#FEBF00] lg:text-4xl md:text-2xl min-[200px]:text-md font-extrabold bi-clock"></i>
                            <div className="details">
                                <h4 className="lg:text-2xl md:text-xl min-[200px]:text-sm font-bold uppercase">Opening hours
                                </h4>
                                <p className="text-xs">Monday - Sunday <br />
                                    9:00 AM to 11:30 PM</p>
                            </div>
                        </div>
                        <div className="item lg:col-span-1 min-[200px]:col-span-4 md:col-span-2">
                            <i
                                className="bi text-[#FEBF00] lg:text-4xl md:text-2xl min-[200px]:text-md font-extrabold bi-telephone-outbound"></i>
                            <div className="details">
                                <h4 className="lg:text-2xl md:text-xl min-[200px]:text-sm font-bold uppercase"> LETS TALK
                                </h4>
                                <p className="text-xs">Phone: 1-800-222-4545 <br />
                                    Fax: 1-800-222-4545</p> 
                            </div>
                        </div>
                        <div className="item lg:col-span-1 min-[200px]:col-span-4 md:col-span-2">
                            <i
                                className="bi text-[#FEBF00] lg:text-4xl md:text-2xl min-[200px]:text-md font-extrabold bi-envelope"></i>
                            <div className="details">
                                <h4 className="lg:text-2xl md:text-xl min-[200px]:text-sm font-bold uppercase">BOOK A TABLE
                                </h4>
                                <p className="text-xs">
                                    Email: demo@website.com <br />
                                    Support: support@website.com
                                </p>
                            </div>
                        </div>
                        <div className="item lg:col-span-1 min-[200px]:col-span-4 md:col-span-2">
                            <i
                                className="bi text-[#FEBF00] lg:text-4xl md:text-2xl min-[200px]:text-md font-extrabold bi-geo-alt"></i>
                            <div className="details">
                                <h4 className="lg:text-2xl md:text-xl min-[200px]:text-sm font-bold uppercase">Our Address
                                </h4>
                                <p className="text-xs">123 Stree New York City , United States Of America.</p>
                            </div>
                        </div>

                    </div>
                    <div className="copy-write-area text-center">
                        <div className="quick-contact flex gap-4 justify-center">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-linkedin"></i>

                            <i className="bi bi-instagram"></i>
                        </div>
                        <p className="text-xs">© 2024 All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;