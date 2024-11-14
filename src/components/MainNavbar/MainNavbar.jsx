import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {  NavLink } from 'react-router-dom';


const MainNavbar = () => {
  return (
    <>
      {[ 'xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-transparent   z-50 ">
          <Container className='lg:px-24 min-[200px]:px-4  '>
            <Navbar.Brand href="#" >
            <span className="flex items-center gap-2"><span
                            className="flex  justify-center  items-center rounded-full w-8 h-8 bg-[#FEBF00] text-[#c52b1f]"><i
                                className="material-icons  rounded-full bordered  border-2 border-[#c52b1f]">restaurant</i></span><span className='text-[#febf00] font-bold lg:text-3xl md:text-2xl min-[200px]:text-md'>Restaurant</span> </span>
              
               </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closebutton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-[#febf00]'>
                <span className="flex items-center gap-2"><span
                            className="flex  justify-center  items-center rounded-full w-8 h-8 bg-[#FEBF00] text-[#c52b1f]"><i
                                className="material-icons  rounded-full bordered  border-2 border-[#c52b1f]">restaurant</i></span><span className='text-[#febf00] font-bold lg:text-3xl md:text-2xl min-[200px]:text-md'>Restaurant</span> </span>
                {/* <span className='text-[#febf00] font-bold lg:text-3xl md:text-2xl min-[200px]:text-md'>Restaurant</span> */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-start flex-grow-1 lg:ml-24 gap-2 lg:items-center font-bold">
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={'/portfolio'} >Portfolio</NavLink>
                <NavLink to={'/clients'}>Clients</NavLink>
                <NavLink to={'/blogs'} >Blogs</NavLink>
                <NavLink to={'/contact'} >Contact</NavLink>
                 
                  
                </Nav>
                <button className="custombutton rounded">
                            <span className="button_curve"></span>
                            <span className="btn rounded align-content-center">Book Table</span></button>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MainNavbar;