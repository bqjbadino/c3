import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/Home">
                <img src='/img/barqia-title.png' />
                <Button>
                    Inscribirse
                </Button>
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default NavBar;