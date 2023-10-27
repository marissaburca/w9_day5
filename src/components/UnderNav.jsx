import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Row,Col} from "react-bootstrap";

const UnderNav =()=>{
    return(
    
        <Row className='px-3 mx-0 text-white align-items-center ' data-bs-theme="dark" style={{ backgroundColor : '#221f1f', }}>
        <Col className='d-flex align-items-center '>
          <span className="display-5 fw-bold ps-2 pe-4 "> TV Shows</span>
          <Dropdown className='d-inline'> 
           <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className='text-white'>
            Genres
           </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end">
            <i className="bi bi-grid fs-4 ps-3"></i>
            <i className="bi bi-grid-3x3 fs-4 ps-3"></i>
    
        </Col>
        </Row>
    )
}

export default UnderNav