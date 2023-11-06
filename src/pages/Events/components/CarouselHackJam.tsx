import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const CarouselHackJam = () => {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        {/**
        <video muted loop autoPlay style={{ width: '100%'}}>
            <source src='/videos/barqia-vr-7.mp4' />
        </video>
         */}
        <img src='/img/barqia-vr-7.jpg' />
        <Carousel.Caption>
          {/**
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/**
        <video muted loop autoPlay style={{ width: '100%'}}>
            <source src='/videos/barqia-ai-2.mp4' />
        </video>
         */}
        <img src='/img/barqia-ai-2.jpg' />
        <Carousel.Caption>
          {/**
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/**
        <video muted loop autoPlay style={{ width: '100%'}}>
            <source src='/videos/barqia-vr-6.mp4' />
        </video>
         */}
        <img src='/img/barqia-vr-6.jpg' />
        <Carousel.Caption>
          {/**
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHackJam;