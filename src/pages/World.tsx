import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import VideoWorld from '../components/VideoWorld/VideoWorld.tsx'

const World = () => {
    return (
        <Container fluid>
            <VideoWorld />
            <Form style={{color: 'white', padding: '0'}}>
                <h1>Enter BARQIA's World Experience</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted" style={{color: 'yellow !important'}}>
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enter World
                </Button>
            </Form>
        </Container>
        
      );
}

export default World;