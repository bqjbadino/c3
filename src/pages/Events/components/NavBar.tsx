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
                <img className='hide-on-desktop' src='/img/barqia-title.png' />
            </Navbar.Brand>
            <Button style={{ background: '#30A4B4', float: 'right', padding: '16px' }}>
                  Inscríbite aquí
            </Button>
        </Container>
    </Navbar>
  );
}

export default NavBar;