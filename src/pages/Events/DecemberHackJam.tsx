import React from 'react';

import './DecemberHackJam.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import NavBar from './components/NavBar.tsx';
import CarouselHackJam from './components/CarouselHackJam.tsx';
import CarouselHackJam2 from './components/CaruoselHackJam2.tsx';

const DecemberHackJam = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <NavBar />
                </Col>
                <Col sm={12}>
                    <video muted loop autoPlay style={{ width: '100%'}}>
                        <source src='/videos/barqia-vr-5.mp4' />
                    </video>

                    <p>
                        ¡Súmate al Barqia Sports Hack Jam 2023!
                    </p>
                    <p>
                        Transformando el mundo del deporte con inteligencia artificial y realidad virtual.
                    </p>
                </Col>

                <Col sm={12}>
                    <p>
                        (contador)
                    </p>
                </Col>

                <Col sm={12}>
                    <p>
                        Sports es una unidad de BARQIA pensada para instituciones deportivas y jugadores que quieran dar un paso hacia adelante en materia de tecnología y datos. A su vez, ofrecemos soluciones B2B a través de nuestro modelo de negocios SaaS (Software as a Service) en donde ofrecemos armar tu propia colección de NFT y mucho más.
                    </p>
                    <p>
                        <strong>
                            Ofrecemos la producción de contenidos inmersivos como tour virtuales, entrevistas y acciones que permiten al espectador sentirse en el lugar de los hechos.
                        </strong>
                    </p>
                    <p>
                        Los clubes o instituciones que deseen armar su colección de NFT como una nueva forma de monetización, además podrán obtener capacitaciones, como así también serán partícipes del proyecto de la WRM en todas sus etapas.
                    </p>
                    <p>
                        <strong>
                            #BarqiaSportsHackJam
                        </strong>
                    </p>
                </Col>

                <Col sm={12}>
                    <video muted loop autoPlay style={{ width: '100%'}}>
                        <source src='/videos/barqia-ai-1.mp4' />
                    </video>

                    <Button>
                        Inscríbete aquí
                    </Button>
                </Col>

                <Col sm={12}>
                    <CarouselHackJam />
                </Col>
                
                <Col>
                    <h1>
                        ¡PARTICIPA EN LA HACK JAM!
                    </h1>
                    <h2>
                        ¿Te atreves a desarrollar un videojuego en 48 horas?
                    </h2>
                    <p>
                        Inscripciones abiertas hasta el (fecha), <strong>¡cupos limitados!</strong>
                    </p>
                    <p>
                        Completa el siguiente formulario e indica si participas de forma individual o en equipo.
                    </p>
                    <p>
                        <Button>
                            Inscribirme
                        </Button>
                    </p>
                    <p>
                        <Button>
                            Conoce las bases
                        </Button>
                    </p>
                </Col>

                <Col>
                    <h1>
                        PREMIOS
                    </h1>
                    <p>
                        El (fecha) cada equipo presentará su juego ante un jurado de expertos. Tras su valoración y la votación de los mismos participantes, se entregarán premios en función de las siguientes categorías:
                        <ul>
                            <li>
                                Mejor desarrollo de Realidad Aumentada
                            </li>
                            <li>
                                Mejor juego
                            </li>
                            <li>
                                Mejor aplicación/multiplataforma
                            </li>
                            <li>
                                Mejor integración de propuesta
                            </li>
                            <li>
                                Mejor proyecto
                            </li>
                        </ul>
                    </p>
                </Col>

                <Col sm={12}>
                    <CarouselHackJam2 />
                </Col>

                <Col sm={12}>
                <img src='/img/barqia-certificate.jpg' />
                    <h1>
                        Certificados de participación
                    </h1>

                    <img src='/img/barqia-trophy-2.jpg' />
                    <h1>
                        Trofeos
                    </h1>
                    
                    <img src='/img/barqia-gift-card.jpg' />
                    <h1>
                        Gift cards
                    </h1>
                </Col>
            </Row>
            

        </Container>
    )
}

export default DecemberHackJam;