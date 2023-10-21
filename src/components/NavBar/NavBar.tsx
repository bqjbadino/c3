import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './NavBar.css';

const NavBar = () => {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img id='barqia-symbol' src='img/barqia-symbol.png' />
                        </Navbar.Brand>
                        <Nav.Link className='desktop-link' href='/'>
                            HOME
                        </Nav.Link>
                        <Nav.Link className='desktop-link' href='/AboutUs'>
                            ABOUT US
                        </Nav.Link>
                        <Nav.Link className='desktop-link' href='/WhatWeDo'>
                            WHAT WE DO
                        </Nav.Link>
                        <Nav.Link className='desktop-link' href='/RaceWithUs'>
                            RACE WITH US
                        </Nav.Link>
                        <Nav.Link className='desktop-link' href='CaseStudies'>
                            CASE STUDIES
                        </Nav.Link>
                        <Nav.Link className='desktop-link' href='/Contact'>
                            CONTACT
                        </Nav.Link>
                        <Nav.Link className='desktop-link' href='/World'>
                            <Button variant="outline-success">Barqia Sports <br /> World</Button>
                        </Nav.Link>
                        <Navbar.Toggle className='navBar-toggle' aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                        
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        
                        >
                            
                            <Offcanvas.Header closeButton>
                            <img id='barqia-title' src='img/barqia-title-black.png' style={{ display: 'block' }} />
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3" style={{textAlign: 'center'}}>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/">HOME</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/AboutUs">ABOUT US</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/WhatWeDo">WHAT WE DO</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/RaceWithUs">RACE WITH US</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/CaseStudies">CASE STUDIES</Nav.Link>
                                    <Nav.Link style={{
                                       color: 'white' }} href="/Contact">CONTACT</Nav.Link>
                                </Nav>
                                <Nav.Link style={{color: 'white', textAlign: 'center' }} href="/World">
                                    <button>
                                        <a href='World'>Barqia Sports <br /> World</a>
                                    </button>  
                                </Nav.Link>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default NavBar;