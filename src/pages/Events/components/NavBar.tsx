import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/Home">
                <img src='/img/barqia-title.png' style={{ maxHeight: '65px'}} />
            </Navbar.Brand>
            <Button style={{ float: 'right', padding: '16px' }}>
                  Inscríbite aquí
            </Button>
        </Container>
    </Navbar>
  );
}

export default NavBar;