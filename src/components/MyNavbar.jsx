import React from 'react';
import { NavbarCollapse, Button} from "react-bootstrap";
import { BsSearch, BsBell, BsPersonCircle} from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewLogo from '../NewLogo.png'

const MyNavbar =()=>{
    return(
    
        <Navbar expand='lg' data-bs-theme="dark" style={{ backgroundColor : '#221f1f'}}>
        <Container fluid>
          <Navbar.Brand>
            <img 
            alt="Logo Netflix"
            src={NewLogo} 
            style={{width:'100px', height: '55px'}}
            />
            </Navbar.Brand>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <NavbarCollapse id="navbarSupportedContent">
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                <Nav.Link className="active fw-bold" href="#">Home</Nav.Link>
                <Nav.Link className="fw-bold" href="#">TV Shows</Nav.Link>
                <Nav.Link className="fw-bold" href="#">Movies</Nav.Link>
                <Nav.Link className="fw-bold" href="#">Recently Added</Nav.Link>
                <Nav.Link className="fw-bold" href="#">My List</Nav.Link>
              
            </Nav>
            <div className="d-flex align-items-center text-white">
              <BsSearch className='mx-2'/>
              <div id="kids" className="fw-bold mx-2">KIDS</div>
              <BsBell  className='mx-2'/>
              <BsPersonCircle  className='mx-2'/>
            </div>
          </NavbarCollapse>
        </Container>
      </Navbar>  
      
    )
}


export default MyNavbar