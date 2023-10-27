import React from 'react';

import './AboutUs.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard.tsx'

import VideoTech1 from '../components/VideoTech1/VideoTech1.tsx';
import VideoGlobe from '../components/VideoGlobe/VideoGlobe.tsx';
import VideoRugby from '../components/VideoRugby/VideoRugby.tsx';
import VideoWhatWeDo from '../components/VideoWhatWeDo/VideoWhatWeDo.tsx';

const AboutUs = () => {
    return (
        <Container fluid>
            <VideoTech1 />

            <Row id="team-cards" style={{color: 'white', position: 'relative', margin: '30px', zIndex: '1', }}>
            <Col sm={12} md={6} lg={3}>
                    <TeamMemberCard
                        image='img/barqia-felipe-barquin.jfif'
                        name='Felipe Barquin'
                        title='CEO'
                        degree='Founder of Barqia'
                        description='A technology company focused on development with AI.'
                    />
                </Col>
                
                <Col sm={12} md={6} lg={3}>
                    <TeamMemberCard
                        image='img/barqia-fernando-carmona.jfif'
                        name='Fernando Carmona'
                        title='COO'
                        degree='Sports Business Management'
                        description='Co-Founder of Padel Fantasy. Fantasy game app from the world of sports.'
                    />
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <TeamMemberCard
                        image='img/barqia-diego-gomez.jpg'
                        name='Diego Gómez'
                        title='CTO'
                        degree='Graduate in '
                        description='specialist'
                    />
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <TeamMemberCard
                        image='img/barqia-juan-pablo-badino.png'
                        name='Juan Pablo Badino'
                        title='CIO'
                        degree='Software Development Specialist'
                        description='MERN stack (MongoDB, Express.js, ReactJS, Node.js) developer.'
                    />
                </Col>
                <Col style={{position: 'relative'}}>
                <VideoGlobe/>
                    {/**
                    <div>
                        <h1 style={{color: 'white', marginTop: '80px', marginBottom: '30px', textAlign: 'center', textDecoration: 'underline'}}>Meet the team:</h1>
                    </div>
                     */}
                    <div style={{background: 'rgba(0, 0, 0, 0.7)', fontSize: '1.3em', lineHeight: '2.3em', marginTop: '40px', padding: '40px 0'}}>
                        <h2 style={{fontWeight: 'bold', margin: '30px 0', textAlign: 'center'}}>Our mission</h2>
                        
                        <p>Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world. We strive to foster an environment that allows fans to have unique and enriching experiences, while providing sports, clubs and athletes with the tools and technology necessary to strengthen their bond with their audience and take their engagement to the next level. Ultimately, our mission is to drive the evolution of relationships in the world of sport, bringing about a deeper and more authentic approach between all those involved.</p>
                        
                        <h2 style={{fontWeight: 'bold', margin: '30px 0', textAlign: 'center'}}>Our story</h2>
                        <p>Barqia Sports was born as a result of the merger of an Argentine company, known as Barqia, and a Spanish one, Padel Fantasy. Our contact occurred thanks to participation in a reference event for startups and entrepreneurs at an international level. After several months of conversations, reflections and exchange of passions, we had the extraordinary idea of ​​founding Barqia Sports, a comprehensive fan engagement platform. We share the same common interests and aspirations, focused on the application of cutting-edge and futuristic technology for the benefit of clubs, athletes and fans, with the purpose of creating a fully immersive platform with absolute connectivity between all the parties involved.</p>
                        
                        <h2 style={{fontWeight: 'bold', margin: '30px 0', textAlign: 'center'}}>Our vision</h2>
                        <p>To be the leading immersive fan engagement platform where all sports, clubs, athletes and fans from around the world meet with the aim of creating a deeper and more realistic relationship between all parties.</p>
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default AboutUs;