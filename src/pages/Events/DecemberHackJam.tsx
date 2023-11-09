import React from 'react';

import './DecemberHackJam.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import NavBar from './components/NavBar.tsx';
import CarouselHackJam from './components/CarouselHackJam.tsx';
import CarouselHackJam2 from './components/CaruoselHackJam2.tsx';
import Countdown from './components/Countdown/Countdown.tsx';

const DecemberHackJam = () => {
    return (
        <div id='december-hack-jam'>
            <NavBar />
        
            <Container style={{ background: 'transparent' }}>
                
                <img className='hide-on-mobile' src='/img/barqia-purple-background-2.jpg' style={{ filter: 'grayscale(80%)', height: '100%', position: 'fixed', top: '0', left: '0' , zIndex: '0'}}/>
                <Row>
                    <Col className='hide-on-mobile' style={{ position: 'relative'}} >
                        <img src='/img/barqia-notebook-vr-user-field.png' />
                        <img src='/img/barqia-vrheadset-and-joystick.png' style={{ position: 'absolute', top: '0', left: '0', width: '300px'}} />
                        <img src='/img/barqia-vr-character.png' style={{ position: 'absolute', right: '0', bottom: '0', width: '300px'}} />
                    </Col>

                    <Col sm={12} lg={12} style={{ marginTop: '-135px', position: 'relative'}}>
                        <img className='hide-on-desktop' src='/img/barqia-vr-5.jpg' style={{ filter: 'opacity(60%)', position: 'relative', width: '100%', zIndex: '0'}} />
                        <h1 className='neon hide-on-mobile' style={{ fontSize: '75px', marginTop: '-80px' }}>SPORTS JAM</h1>
                    </Col>

                    <Col sm={12} lg={12} style={{ marginTop: '40px', position: 'relative', zIndex: '1'}}>
                        <div style={{ position: 'relative', zIndex: '1'}}>
                            <p>
                                ¡Súmate al <strong>XR HACKATHON SPORTS 2023</strong>!
                            </p>
                            <p>
                                Transformando el mundo del deporte con inteligencia artificial y realidad virtual.
                            </p>
                        </div>
                        <p>
                            El próximo 1, 2 y 3 de Diciembre dará comienzo la <strong>I Edición del Sports Jam</strong>, que reunirá al mejor talento gamer en sus diferentes disciplinas, y a las grandes empresas colaboradoras, para <span style={{ fontWeight: 'bold' }}>crear videojuegos profesionales que mejoren y potencien la experiencia de los fanáticos,más allá de las gradas.</span>
                        </p>

                        <p>
                            Este evento se ha creado para desarrollar y dar visibilidad a <span style={{ fontWeight: 'bold' }}>ideas
                            disruptivas e innovadoras de alto impacto en la industria del deporte</span>,
                            del videojuego y la programación, buscando impulsar el talento gamer,
                            <span style={{ fontWeight: 'bold' }}>creando oportunidades, nuevos proyectos y tecnologías.</span>
                        </p>

                        <h2>
                            <strong>
                                «Diseñando el futuro de las experiencias deportivas»
                            </strong>
                        </h2>

                        <p>
                            Sports Jam, es un maratón anual de creación de videojuegos, donde por
                            equipos, crearán un juego que se ajuste a un tema común, en solo 48
                            horas.
                        </p>

                        <p>
                            Al final, cada equipo presentará su juego ante un jurado, y tras la
                            votación de los expertos, de los mismos participantes y de los
                            fanáticos/asistentes que acudan, se entregarán premios a los mejores
                            juegos y mejores talentos.
                        </p>
                    </Col>

                    <Col sm={12} lg={12} style={{ zIndex: '1'}} >
                        <Countdown />
                    </Col>

                    {/**
                    <Col sm={12} lg={12}>
                        <video muted loop autoPlay style={{ width: '100%'}}>
                            <source src='/videos/barqia-ai-1.mp4' />
                        </video>

                        <Button style={{ margin: '40px 0', padding: '30px 0'}}>
                            Quiero inscribirme
                        </Button>
                    </Col>
                    */}

                    <Col sm={12} lg={12} style={{ zIndex: '1'}} >
                        <CarouselHackJam />
                    </Col>
                    
                    <Col lg={12} style={{ zIndex: '1' }}>
                        <h1 style={{ margin: '40px 0'}}>
                            <strong>¡PARTICIPA EN LA HACK JAM!</strong>
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
                            <Button style={{ padding: '15px 0'}}>
                                Quiero inscribirme
                            </Button>
                        </p>
                        <p>
                            <Button style={{ backgroundColor: '#C3107C !important', padding: '15px 0'}}>
                                Conoce las bases
                            </Button>
                        </p>
                    </Col>

                    <Col lg={12} style={{ zIndex: '1'}} >
                        <h1 style={{ margin: '40px 0'}}>
                            <strong>PREMIOS</strong>
                        </h1>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>Premios:</span>
                            <ul>
                                <li>
                                    Premio General: mejor implementación demostrando claramente las posibilidades de las nuevas tecnologías.
                                </li>
                                <li>
                                    Premio Juegos Inmersivos
                                </li>
                                <li>
                                    Premio Gaming
                                </li>
                                <li>
                                    Premio Aplicaciones
                                </li>
                            </ul>
                        </p>

                        <p>
                            <span style={{ fontWeight: 'bold' }}>Diplomas individuales:</span>
                            <ul>
                                <li>
                                    Diplomas mejor desarrollador
                                </li>
                                <li>
                                    Diploma mejor modelador
                                </li>
                                <li>
                                    Diploma mejor compañero
                                </li>
                                <li>
                                    Diploma más creativo
                                </li>
                            </ul>
                        </p>
                    </Col>

                    {/**
                    <Col sm={12} lg={12}>
                        <CarouselHackJam2 />
                    </Col>
                    */}

                    <Col sm={12} lg={12} style={{ textAlign: 'center', zIndex: '1' }}>
                        {/**
                        <img src='/img/barqia-certificate.jpg' />
                        */}
                        <img className='img-symbol' src='/img/barqia-symbol-certificate.png' />
                        <h1>
                            <span className='barqia-purple-text'>Certificados de participación</span>
                        </h1>

                        <img className='img-symbol' src='/img/barqia-symbol-trophy.png' />
                        <h1>
                            <span className='barqia-purple-text'>Trofeos</span>
                        </h1>
                        
                        <img className='img-symbol' src='/img/barqia-symbol-gift.png' />
                        <h1>
                            <span className='barqia-purple-text'>Gift cards</span>
                        </h1>
                    </Col>

                    <Col sm={12} lg={12} style={{ zIndex: '1' }}>
                        <h1 style={{ margin: '40px 0'}}>
                            <strong>¡VIVE UNA EXPERIENCIA A JAMMER REAL!</strong>
                        </h1>

                        <p>
                            HackJam abierto 24h
                        </p>
                        <p>
                            <strong>¡Incluye comida y alojamiento para dormir!</strong>
                        </p>

                        <p>
                            Durante los días 1, 2 y 3 de diciembre en las instalaciones de () habilitarán una zona de descanso para que los jammers podáis pasar allí las dos noches si lo necesitáis, y así vivir una experiencia completa con todos los participantes.
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

                    <Col sm={12} lg={12} style={{ textAlign: 'center', zIndex: '1' }}>
                        <img className='img-symbol' src='/img/barqia-symbol-burger.png' />
                        <h1>
                            <span className='barqia-purple-text'>Comida y bebida</span>
                        </h1>

                        <img className='img-symbol' src='/img/barqia-symbol-computer.png' />
                        <h1>
                            <span className='barqia-purple-text'>Mesa de trabajo</span>
                        </h1>
                        
                        <img className='img-symbol' src='/img/barqia-symbol-wifi.png' />
                        <h1>
                            <span className='barqia-purple-text'>Conexión a internet</span>
                        </h1>

                        <img className='img-symbol' src='/img/barqia-symbol-building.png' />
                        <h1>
                            <span className='barqia-purple-text'>Zona de descanso</span>
                        </h1>

                        <img className='img-symbol' src='/img/barqia-symbol-tshirt.png' />
                        <h1>
                            <span className='barqia-purple-text'>Kit de bienvenida</span>
                        </h1>
                    </Col>

                    <Col sm={12} lg={12} style={{ marginTop: '40px', zIndex: '1' }}>
                        <h1 style={{ marginBottom: '30px'}}>
                            <strong>AGENDA</strong>
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

                    <Col lg={12} style={{ zIndex: '1' }}>
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

                    <Col lg={12} style={{ zIndex: '1' }}>
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

                    <Col sm={12} lg={12} style={{ zIndex: '1' }}>
                        <h1 style={{ margin: '40px 0'}}>
                            <strong>
                                CÓMO LLEGAR
                            </strong>
                        </h1>

                        <p>
                            El evento tendrá lugar en el Campus del videojuego de Madrid in Game, que se ubica en la Casa de Campo y cuenta con 3 pabellones.
                        </p>

                        <h2>
                            <strong>C. de Bailén, 41, 28005 Madrid</strong>
                        </h2>

                        <p>
                            Llega al Campus con las líneas de bus <strong>EMT 31, 33, 36 Y 39,</strong> Paradas <strong>879 y 880.</strong> Las estaciones de Metro más cercanas son <strong>Alto Extremadura y Lago.</strong>
                        </p>

                        <p>
                            Madrid in Game también ofrece el uso de su parking durante los tres días.
                        </p>
                    </Col>

                    <Col style={{ zIndex: '1' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6075.695832667586!2d-3.7127015!3d40.4122198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d80511300f%3A0x9e5733dc0a37043b!2sC.%20de%20Bail%C3%A9n%2C%2041%2C%2028005%20Madrid%2C%20Spain!5e0!3m2!1sen!2sar!4v1699274897909!5m2!1sen!2sar" style={{ border: '0', height: '400px', margin: '40px 0', width: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <Button style={{ padding: '15px 0'}}>
                            Cómo llegar
                        </Button>
                    </Col>

                    <Col sm={12} lg={12} style={{ margin: '20px 0', zIndex: '1' }}>
                        
                        <h4>
                            <a href=''>Aviso Legal y Cookies</a>
                        </h4>
                    </Col>

                    <Col sm={12} lg={12} style={{ marginBottom: '40px', zIndex: '1'}}>
                        
                        <h4>
                            <a href=''>Privacidad</a>
                        </h4>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default DecemberHackJam;