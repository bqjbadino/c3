import React from 'react';

import './DecemberHackJam.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import NavBar from './Components/NavBar.tsx';
import CarouselHackJam from './Components/CarouselHackJam.tsx';
import CarouselHackJam2 from './Components/CaruoselHackJam2.tsx';
import Countdown from './Components/Countdown/Countdown.tsx';

const DecemberHackJam = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <NavBar />
                </Col>
                <Col sm={12} style={{ marginTop: '-135px', position: 'relative'}}>
                    <video muted loop autoPlay style={{ width: '100%'}}>
                        <source src='/videos/barqia-vr-5.mp4' />
                    </video>
                    <div style={{ marginTop: '-337px'}}>
                        <p>
                            ¡Súmate al Barqia Sports Hack Jam 2023!
                        </p>
                        <p>
                            Transformando el mundo del deporte con inteligencia artificial y realidad virtual.
                        </p>
                    </div>
                </Col>

                <Col sm={12} style={{ zIndex: '1'}}>
                    <Countdown />
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
                    {/**
                    <img src='/img/barqia-certificate.jpg' />
                    */}
                    <img src='/img/barqia-certificate-2.png' />
                    <h1>
                        Certificados de participación
                    </h1>

                    <img src='/img/barqia-trophy-3.png' />
                    <h1>
                        Trofeos
                    </h1>
                    
                    <img src='/img/barqia-gift-card.jpg' />
                    <h1>
                        Gift cards
                    </h1>
                </Col>

                <Col sm={12}>
                    <h1>
                        <strong>¡VIVE UNA EXPERIENCIA A JAMMER REAL!</strong>
                    </h1>

                    <p>
                        HackJam abierto 24h
                    </p>
                    <p>
                        <strong>¡Incluye comida y alojamiento para dormir!</strong>
                    </p>

                    <p>
                        Durante los días 20, 21 y 22 de octubre las instalaciones de Madrid in Game habilitarán una zona de descanso para que los jammers podáis pasar allí las dos noches si lo necesitáis, y así vivir una experiencia completa con todos los participantes.
                    </p>
                    <p>
                        <strong>Solo necesitarás:</strong> Saco de dormir, esterilla o colchón, productos de higiene personal, y ropa cómoda.
                    </p>

                    <p>
                        ¡Ah! No te olvides de traer tu ordenador (hardware y software) y cualquier gadget que necesites para participar y desarrollar el videojuego durante el evento.
                    </p>
                    <p>
                        ¡Del resto nos encargamos nosotros!
                    </p>
                </Col>

                <Col sm={12}>
                    <img src='/img/barqia-food-and-drink.jpg' />
                    <h1>
                        Comida y bebida
                    </h1>

                    <img src='/img/barqia-workstation.jpg' />
                    <h1>
                        Mesa de trabajo
                    </h1>
                    
                    <img src='/img/barqia-internet.jpg' />
                    <h1>
                        Conexión a internet
                    </h1>

                    <img src='/img/barqia-rest.jpg' />
                    <h1>
                        Zona de descanso
                    </h1>

                    <img src='/img/barqia-welcome-kit-2.jpg' />
                    <h1>
                        Kit de bienvenida
                    </h1>
                </Col>

                <Col sm={12}>
                    <h1>
                        AGENDA
                    </h1>

                    <h2>
                        <strong>
                            VIERNES
                        </strong>
                    </h2>

                    <ul>
                        <li>
                            <strong>(Horario)</strong> Apertura y registro
                        </li>

                        <li>
                            <strong>(Horario)</strong> Bienvenida y sesión de inauguración
                        </li>

                        <li>
                            <strong>(Horario)</strong> Networking y creación de equipos
                        </li>

                        <li>
                            <strong>(Horario)</strong> ¡Que empiece el juego!
                        </li>
                    </ul>
                </Col>

                <Col>
                    <h2>
                        <strong>
                            SÁBADO
                        </strong>
                    </h2>

                    <ul>
                        <li>
                            ¡A segir desarrollando el juego!
                        </li>

                        <li>
                            Habrá <strong>mentores</strong> expertos durante toda la jornada
                        </li>

                        <li>
                            Torneos y muchas <strong>sorpresas</strong>
                        </li>
                    </ul>
                </Col>

                <Col>
                    <h2>
                        <strong>
                            DOMINGO
                        </strong>
                    </h2>

                    <ul>
                        <li>
                            <strong>(Horario)</strong> Entrega del videojuego
                        </li>

                        <li>
                            <strong>(Horario)</strong> Bienvenida y sesión de inauguración
                        </li>

                        <li>
                            <strong>(Horario)</strong> Networking y creación de equipos
                        </li>

                        <li>
                            <strong>(Horario)</strong> ¡Que empiece el juego!
                        </li>
                    </ul>
                </Col>

                <Col sm={12}>
                    <h1>
                        <strong>
                            CÓMO LLEGAR
                        </strong>
                    </h1>

                    <p>
                        El evento tendrá lugar en el Campus del videojuego de Madrid in Game, que se ubica en la Casa de Campo y cuenta con 3 pabellones.
                    </p>

                    <h2>
                        Av.Principal, 3 - 28011 Madrid
                    </h2>

                    <p>
                        Llega al Campus con las líneas de bus <strong>EMT 31, 33, 36 Y 39,</strong> Paradas <strong>879 y 880.</strong> Las estaciones de Metro más cercanas son <strong>Alto Extremadura y Lago.</strong>
                    </p>

                    <p>
                        Madrid in Game también ofrece el uso de su parking durante los tres días.
                    </p>
                </Col>

                <Col>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274.76979855363!2d-58.4024064!3d-34.5954056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57dbce045cd%3A0x2704541ae686099a!2sParque%20Las%20Heras!5e0!3m2!1ses-419!2sar!4v1698859790060!5m2!1ses-419!2sar" width="600" height="450" style={{ border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <Button>
                        Cómo llegar
                    </Button>
                </Col>

                <Col sm={12}>
                    <a href=''>Aviso Legal y Cookies</a>
                </Col>

                <Col sm={12}>
                    <a href=''>Privacidad</a>
                </Col>
                
            </Row>
            

        </Container>
    )
}

export default DecemberHackJam;