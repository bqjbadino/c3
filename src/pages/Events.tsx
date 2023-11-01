import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import NavBar from '../components/NavBar/NavBar.tsx';

const Events = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <a href='/Events/DecemberHackJam'>December Hack Jam</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Events;