import React from 'react';

import './RaceWithUs.css';

import Container from 'react-bootstrap/Container';

import VideoKick from '../components/VideoKick/VideoKick.tsx'

const RaceWithUs = () => {
    return (
        <Container fluid style={{color: 'white', padding: '0'}}>
            <VideoKick />            
            <div className="row" style={{background: 'transparent', zIndex: '1', position: 'relative'}}>
                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 1</h1>
                    <ul>
                        <li>360° filming</li>
                    </ul>
                    <p>
                        Includes filming with 360º cameras (4k) of a match or training session
                    </p>
                </div>
                
                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 2</h1>
                    <ul>
                        <li>360° Filming - Advanced</li>
                        <li>Trivia assembly (1)</li>
                    </ul>
                    <p>
                        Filming with 360º cameras (4K and 8K) and carrying out a trivia related to filming
                    </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 3</h1>
                    <ul>
                        <li>360° Filming - Premium</li>
                        <li>360° Interview</li>
                        <li>Trivia assembly (2)</li>
                    </ul>
                    <p>
                        Add a 360º interview to the filming, also include the use of a drone and a trivia for each filming
                    </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 4</h1>
                    <ul>
                        <li>360° filming</li>
                    </ul>
                    <p>
                        Includes filming with 360º cameras (4k) of a match or training session
                    </p>
                </div>
                
                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 5</h1>
                    <ul>
                        <li>360° Filming - Advanced</li>
                        <li>Trivia assembly (1)</li>
                    </ul>
                    <p>
                        Filming with 360º cameras (4K and 8K) and carrying out a trivia related to filming
                    </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 6</h1>
                    <ul>
                        <li>360° Filming - Premium</li>
                        <li>360° Interview</li>
                        <li>Trivia assembly (2)</li>
                    </ul>
                    <p>
                        Add a 360º interview to the filming, also include the use of a drone and a trivia for each filming
                    </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 7</h1>
                    <ul>
                        <li>360° filming</li>
                    </ul>
                    <p>
                        Includes filming with 360º cameras (4k) of a match or training session
                    </p>
                </div>
                
                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 8</h1>
                    <ul>
                        <li>360° Filming - Advanced</li>
                        <li>Trivia assembly (1)</li>
                    </ul>
                    <p>
                        Filming with 360º cameras (4K and 8K) and carrying out a trivia related to filming
                    </p>
                </div>

                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 9</h1>
                    <ul>
                        <li>360° filming</li>
                    </ul>
                    <p>
                        Includes filming with 360º cameras (4k) of a match or training session
                    </p>
                </div>
                
                <div className="col-lg-3 col-sm-6 col-xs-1 barqia-level">
                    <h1>Level 10</h1>
                    <ul>
                        <li>360° Filming - Advanced</li>
                        <li>Trivia assembly (1)</li>
                    </ul>
                    <p>
                        Filming with 360º cameras (4K and 8K) and carrying out a trivia related to filming
                    </p>
                </div>
                
                <div className="row">
                    <h1>Noticias</h1>
                    <div className="col-3">
                        Noticia 1
                    </div>
                    <div className="col-3">
                        Noticia 2
                    </div>
                    <div className="col-3">
                        Noticia 3
                    </div>
                    <div className="col-3">
                        Noticia 4
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default RaceWithUs;