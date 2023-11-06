import React from 'react';

import './Countdown.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const Countdown = () => {
    return (
        <Container id='countdown' style={{ fontSize: '14px', position: 'relative', zIndex: '1'}}>
            <Row>
                <Col xs={3} sm={3}>
                    <h1>
                        00
                    </h1>
                    <p>
                        Días
                    </p>
                </Col>

                <Col xs={3} sm={3}>
                    <h1>
                        00
                    </h1>
                    <p>
                        Horas
                    </p>
                </Col>

                <Col xs={3} sm={3}>
                    <h1>
                        00
                    </h1>
                    <p>
                        Min
                    </p>
                </Col>

                <Col xs={3} sm={3}>
                    <h1>
                        00
                    </h1>
                    <p>
                        Seg
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Countdown;