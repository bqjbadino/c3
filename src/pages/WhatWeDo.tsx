import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import VideoWhatWeDo from '../components/VideoWhatWeDo/VideoWhatWeDo.tsx'

const WhatWeDo = () => {
    return (
        <Container>
            <Row style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white', fontSize: '1.3em', lineHeight: '2.3em', marginBottom: '80px', padding: '40px 0'}}>
                <h1 style={{fontWeight: 'bold', marginBottom: '40px', textAlign: 'center'}}>What we do</h1>

                <p>We are the leading IMMERSIVE FAN ENGAMENT PLATFORM perfect for clubs, athletes and fans of all sports worldwide. Participate in all the immersive experiences, earn points, get benefits and help to grow your favorite club or athlete.</p>

                <p>Thanks to our cutting-edge technology, this allows us to capture the maximum attention of the fans and create a closer bond between them and their favourite clubs or athletes. Sports entities will have the opportunity to create their own digital value and make it grow while generating greater interaction with their fans on the Barqia Sport World platform.</p>

                <p>The opportunities that Barqia Sports offers clubs and athletes are multiple, from becoming strategic partners to achieve a technological transformation, to creating their own virtual sports city with immersive VR content, statistics, blockchain technology, artificial intelligence and even augmented reality.
                </p>

                <p>Join the Barqia Sports World platform, interact and level up!</p>

                <p>On the side of the sports entities and athletes, they will be able to grow their level and therefore increase their digital assets thanks to the interaction of their fans in the activities or experiences within Barqia Sports World. The fans of each club, while interacting or participating in the experiences within Barqia Sports World, will be earning points and therefore obtaining real benefits from their club or athlete.</p>
            </Row>
        </Container>
    )
}

export default WhatWeDo;