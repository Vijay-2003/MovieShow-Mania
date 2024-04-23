"use client"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Accordion} from 'react-bootstrap/Accordion'
import {Icon} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-2 text-white">
      <Container fluid className=' p-3 text-white'>
        <Navbar.Brand href="#" className=' text-white'>  
               MovieShowMania
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className=' flex justify-center items-center gap-3'>
              <Nav.Link href="#action1" className=' text-white'>Home</Nav.Link>
              <Nav.Link href="#action2" className=' text-white'>Movies</Nav.Link>
              <Nav.Link href="#action2" className=' text-white'>Shows</Nav.Link>
            </div>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="🔍 For a Movie/Show"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars