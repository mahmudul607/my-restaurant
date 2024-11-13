import { Accordion } from "react-bootstrap";
import "./About.css"

const About = () => {
    return (
        <div className="aboutUs pb-8 max-sm:px-4 max-sm:text-xs -top-16 relative bg-[#000324]">
            <div className="lg:flex  pt-24">
                <div className="flex flex-item lg:w-1/2 lg:h-[500px]  md:h-[400px] h-[300px] items-center   relative">
                    <div className="members mx-auto w-[150px]  md:w-[300px] md:h-[300px] h-[150px] rounded-full">

                    </div>
                    <div className="indicator absolute top-[75%] left-[30%]">
                        <span className="indicator-item h-20 w-20 indicator-start badge badge-secondary text-4xl"><i className="bi bi-telephone" /></span>
                        <div className="grid sm:w-48 sm:h-20 w-36 h-12 rounded-tr-full rounded-bl-full text-black bg-green-600 place-items-center content">
                            <h2 className='pl-6 pt-4'>01797692607</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-item font-Roboto sm:p-8 p-2">
                    <h1 className='text-4xl text-[#ff52d9]'>About Us</h1>
                    <h1 className='text-white'>Create Life long Learning</h1>
                    <p className='text-white'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;