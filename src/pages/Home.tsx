import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import Contaienr from 'react-bootstrap/Container';

import VideoMetaverse from '../components/VideoMetaverse/VideoMetaverse.tsx'

const Home = () => {
    return (
        <div>
            <VideoMetaverse />
            
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <img id="360-mobile-rotate-sample" src='gifs/rotate.gif' style={{margin: 'auto'}} />
                </Col>

                <Col>
                    <div style={{color: 'white'}}>
                        <h1>Increment fan engagement</h1>
                        <p>Make a technological transformation directly applied to the entertainment of your fans</p>

                        <h1>Technology transformation</h1>
                        <p>Creates a closer relationship between the fan and the club or athlete, achieving an engagement of maximum interaction</p>

                        <h1>Unlimited tickets</h1>
                        <p>Offer unlimited tickets thanks to our immersive technology</p>

                        <h1>Experiences</h1>
                        <p>Offer innovative and technological services to your fans and they will return it to you</p>
                    </div>
                </Col>
            </Row>
            

            
        </div>
    )
}

export default Home;