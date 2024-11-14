import { Accordion } from "react-bootstrap";
import "./About.css"
import Footer from "../../components/Footer/Footer";

const About = () => {
    return (
        <div>
        <div className="aboutUs pb-8 max-sm:px-4 max-sm:text-xs -top-16 relative bg-[#000324]">
            <div className="min-[200px]:flex-col flex md:flex-row   md:pt-24 min-[200px]:pt-16 ">
                <div className="flex flex-item md:w-1/2 md:h-[500px]    items-center justify-between  relative">
                <div className="staff-photo lg:h-[400px] w-full px-8">
                    <img className="w-full h-full rounded" src="/src/assets/img/efffc28c62aa90f41b3f32f793ab5dcc.jpg" alt="" />
                </div>
                </div>
                <div className="flex-item font-Roboto sm:p-8 min-[200px]:p-2 md:w-1/2">
                    <h1 className='text-4xl text-[#FEBF00]'>About Our Restaurant</h1>
                    <h1 className='text-white'>Make a better experience with us</h1>
                    <p className='text-white'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> Food Qualities</Accordion.Header>
                                <Accordion.Body>
                                <li><strong>Freshness Checks:</strong> Perform regular checks on the freshness of ingredients, such as vegetables, meats, and seafood. Use a “first-in, first-out” (FIFO) inventory system to ensure older ingredients are used before newer ones.</li>
                                <li><strong>Organic and Local Sourcing:</strong> Where possible, prioritize organic and locally sourced ingredients to ensure freshness, minimize transport time, and support sustainability.</li>
                                
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Behavior of Staff</Accordion.Header>
                                <Accordion.Body>
                                <li>Good Communication with Clients or Customers</li>
                                <li>Full Fill The Customer Requirement As possible</li>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Security Groups</Accordion.Header>
                                <Accordion.Body>
                                <li>We have a security group they give security for any of our client and customer in our area.</li>
                                <li>The security group detects the theft and punishes it.</li>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </div>
                </div>
            </div>



        </div>

       <div className="relative">
       <div className="-top-16 absolute w-full">
        <Footer></Footer>
        </div>
       
        </div>
        </div>
    );
};

export default About;