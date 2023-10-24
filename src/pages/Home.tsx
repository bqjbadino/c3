import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import VideoMetaverse from '../components/VideoMetaverse/VideoMetaverse.tsx'

const Home = () => {
    return (
        <div>
            <Row>
                {/*
                <Col lg={6} md={12} sm={12}>
                    <img id="360-mobile-rotate-sample" src='gifs/rotate.gif' style={{margin: 'auto'}} />
                </Col>*/}
                <Col lg={12} md={12} sm={12} style={{position: 'relative'}}>
                    <VideoMetaverse />
                </Col>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} style={{color: 'white'}}>
                            <p>Feel the passion for sports in a more immersive way. Interact with your sports entity and move up levels where you can grow your club and your passion. Live the emotion with Barqia Sports.</p>

                            
                            <p>We are passionate about sports and technology. Barqia Sports wants to deliver you a more interactive and technological way to continue living sports to spread the same passion to you.</p>

                            
                            <p>The immersive platform that offers fans the opportunity to create a closer bond with athletes and sports entities.</p>

                            
                            <p>Offer innovative and technological services to your fans and they will return it to you</p>
                        </Col>
                        <Col lg={12} md={12} sm={12} style={{color: 'white'}}>
                            <h1>IF YOU ARE AN ATHLEY OR AN SPORT ENTITIY, WE INVITE YOU TO ASOCIATE WITH US...</h1>

                            <p>At Barqia Sports, one of our main objectives is to build strong, long-term partnerships with professional sports clubs and organisations. Our approach is to create a fully immersive plan that elevates the club to the highest engagement and sporting experience level.</p>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </div>
    )
}

export default Home;