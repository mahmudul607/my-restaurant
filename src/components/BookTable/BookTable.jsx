

const BookTable = () => {
    return (
        <div className="book-table-section h-screen min-[200px]:mb-24 sm:mb-8 ">
            <div className="bg-img ">
                <div className="book-table-content lg:pt-24 sm:pt-16 min-[200px]:pt-4 text-white  lg:max-w-[545px] min-[200px]:max-w-full lg:ml-48 md:ml-32 sm:mx-16 min-[200px]:mx-8 lg:mr-auto md:mr-8 ">
                    <div>
                        <div className="booking-tilte sm:space-y-6 min-[200px]:space-y-2 min-[200px]:text-sm">
                            <li className="list-style">Buy Now</li>
                            <h1 className="lg:text-4xl sm:text-xl font-bold uppercase">Book Your Table</h1>
                            <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare
                                non id
                                blandit netus.</p>
                        </div>
                        <form className="flex flex-column md:gap-4 min-[200px]:gap-2 py-6 text-white bg-transparent">
                            <span className="w-full  md:flex md:gap-2">
                                <input className="w-full border-1 bg-transparent p-2 max-[767.99px]:mb-2" type="text"
                                    name="name" placeholder="Name" />
                                <input className="w-full border-1 bg-transparent p-2" type="text"
                                    name="email" placeholder="Email" />
                            </span>
                            <span className="w-full  md:flex md:gap-2">
                                <input className="w-full border-1 bg-transparent  p-2  max-[767.99px]:mb-2" type="date"
                                    name="date" placeholder="Reservation Date" />
                                <input className="w-full border-1 bg-transparent  p-2 "
                                    type="number" name="people" placeholder="Number of People" min="1" />
                            </span>

                            <textarea className="bg-transparent border-1" name="message" id="bookingMessage"
                                placeholder="Message"></textarea>

                            
                            <button className="  custombutton  w-32">
                            <span className="button_curve "></span>
                            <input className="btn " type="submit" defaultValue="Book Now" />
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTable;