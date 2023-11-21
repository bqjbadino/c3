import React from 'react';

import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container id='footer' style={{ background: 'black', borderRadius: '10px', padding: '50px', position: 'relative', width: '100%', zIndex: '2'}}>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <img className='hide-on-mobile' src='/img/barqia-symbol.png' style={{ width: '80px'}} />
                    <img className='hide-on-mobile' src='/img/barqia-symbol-onklub.png' style={{ filter: 'invert(1)', marginLeft: '-8px', marginTop: '10px', width: '55px'}} />

                    <img className='hide-on-desktop' src='/img/barqia-symbol.png' style={{ width: '50px'}} />
                    <img className='hide-on-desktop' src='/img/barqia-symbol-onklub.png' style={{ filter: 'invert(1)', marginTop: '10px', width: '30px'}} />
                </Col>
            </Row>
            <hr style={{ margin: '40px 0'}} />
            <Row id='barqia-social-networks'>
                <Col style={{ textAlign: 'center' }}>
                    <a target="_blank" href='https://www.youtube.com/@barqiasports'><img src='/img/logo-youtube.png' /></a>
                    <a target="_blank" href='https://www.linkedin.com/company/barqiasports/?originalSubdomain=es'><img src='/img/logo-linkedin.png' style={{ margin: '0 40px'}} /></a>
                    <a target="_blank" href='https://www.instagram.com/barqiasports/'><img src='/img/logo-instagram.png' /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;