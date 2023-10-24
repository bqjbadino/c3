import React from 'react';

import './World.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import VideoWorld from '../components/VideoWorld/VideoWorld.tsx'

const World = () => {
    return (
        <Container fluid>
            <VideoWorld />
            <Form style={{background: 'rgba(0, 0, 0, 0.7)', borderRadius: '2px', color: 'white', margin: 'auto', maxWidth: '600px', padding: '50px 80px', position: 'relative'}}>
                <h1 style={{textAlign: 'center'}}>Enter BARQIA's World Experience</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}}/>
                    <Form.Text className="text-muted" style={{color: 'yellow !important'}}>
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember password" />
                </Form.Group>
                <p style={{textAlign: 'center'}}>
                    <Button className="barqia-button" type="submit" style={{padding: '10px 20px'}}>
                        Enter World
                    </Button>
                </p>
                
            </Form>
        </Container>
      );
}

export default World;