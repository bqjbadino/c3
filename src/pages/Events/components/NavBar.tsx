import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary" style={{ position: 'relative', zIndex: '2'}}>
        <Container>
            <Navbar.Brand href="/Home">
                <img className='hide-on-mobile' src='/img/barqia-symbol.png' style={{ width: '80px'}} />
                <img className='hide-on-mobile' src='/img/barqia-symbol-onklub.png' style={{ filter: 'invert(1)', marginLeft: '-8px', marginTop: '10px', width: '55px'}} />

                <img className='hide-on-desktop' src='/img/barqia-symbol.png' style={{ width: '50px'}} />
                <img className='hide-on-desktop' src='/img/barqia-symbol-onklub.png' style={{ filter: 'invert(1)', marginLeft: '-8px', marginTop: '10px', width: '34px'}} />

                <img className='hide-on-mobile hide-on-desktop' src='/img/barqia-title.png' />
            </Navbar.Brand>
            <Button className='hide-on-mobile' style={{ background: '#30A4B4', float: 'right', padding: '16px' }}>
                  Inscríbite aquí
            </Button>
            <Button className='hide-on-desktop' style={{ background: '#30A4B4', float: 'right', fontSize: '15px', padding: '8px', width: '50% !important' }}>
                  Inscríbite aquí
            </Button>
        </Container>
    </Navbar>
  );
}

export default NavBar;