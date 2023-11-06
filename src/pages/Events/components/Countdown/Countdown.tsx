import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const Countdown = () => {
    return (
        <Container id='countdown'>
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
                        Minutos
                    </p>
                </Col>

                <Col xs={3} sm={3}>
                    <h1>
                        00
                    </h1>
                    <p>
                        Segundos
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Countdown;