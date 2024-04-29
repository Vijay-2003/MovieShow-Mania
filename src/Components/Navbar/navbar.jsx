"use client"
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Accordion} from 'react-bootstrap/Accordion'
// import {Icon} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'

const Navbars = () => {

  const [searchvalue, setsearchvalue] = useState();
  const [searchdata, setsearchdata] = useState();
  const router = useRouter()

  // useEffect(() => {
  //   handlesearch();
  // },[searchvalue])

  const handlesearch = () => {
    // e.preventDefault();

    fetch(`https://movies-api14.p.rapidapi.com/search?query=${searchvalue}`, {
      method:'GET',
      headers: {
        'X-RapidAPI-Key': '3b1a4fac7bmshd779f247bcd3562p1b66eajsn88d4cb9facc4',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    }).then(response => response.json()).then((data) => {
      console.log(data);
      setsearchdata(data);
      // console.log(data.contents.contentType)
    })

    router.push(`/searchdata/${searchvalue}`)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-2 text-white text-[25px]">
      <Container fluid className=' p-3 text-white'>
        <Navbar.Brand href="/" className=' text-white flex justify-center items-center gap-1'>
          <img className=' bg-black w-[45px] h-[45px] justify-center items-center'
           src='https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg' />  
               <div className='text-[25px]'>MS-Mania</div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className=' flex justify-center items-center gap-3'>
              <Nav.Link href="/MoviesHome" className=' text-white'>Movies</Nav.Link>
              <Nav.Link href="/ShowsHome" className=' text-white'>Shows</Nav.Link>
            </div>
          </Nav>
          {/* action={handlesearch} */}
          <Form className="d-flex" action={handlesearch} >
            <Form.Control
              type="search"
              placeholder="🔍For a Movie/Show"
              className="me-2"
              aria-label="Search"
              value={searchvalue}
              onChange={(ev) => setsearchvalue(ev.target.value)}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars