import React from 'react';

import './Events.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const Events = () => {
    return (
        <Container id='events'>
            <a href='Events/DecemberHackJam'>
                <img src='/img/sports-jam-diciembre-2023/sports-jam-barqia-onklub.png'
                    style={{
                        position: 'absolute',
                        top: '-50px',
                        left: '0',
                        opacity: '0.8',
                        width: '100%',
                        zIndex: '0'
                    }}
                />
            </a>
            
            <a className='neon' href='/Events/DecemberHackJam'
                style={{
                    position: 'absolute',
                    top: '480px',
                    left: '360px',
                    fontSize: '40px'
                }}>
                    DICIEMBRE 2023 - Sitio web del evento
            </a>
        </Container>
    )
}

export default Events;