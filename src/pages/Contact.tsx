import React from 'react';

import Container from 'react-bootstrap/Container';

import VideoTech1 from '../components/VideoTech1/VideoTech1.tsx'

const Contact = () => {
    return (
        <Container fluid style={{color: 'white', padding: '0'}}>
            <VideoTech1 />
            <div style={{background: 'transparent', zIndex: '1', position: 'relative'}}>
                {/**<div className="row calendly-inline-widget" data-url="https://calendly.com/jpbadino"></div>*/}
                
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                
                <div className="contact2" style={{backgroundImage: '(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)'}} id="contact">
            </div>
            
                <div className="container">
                    <div className="row contact-container">
                    <div className="col-lg-12">
                        <div className="card card-shadow border-0 mb-4" style={{background: 'rgba(0, 0, 0, 0.7)', padding: '50px 20px'}}>
                        <div className="row" style={{color: 'white'}}>
                            <div className="col-lg-7">
                            <div className="contact-box p-4">
                                <h4 className="title">Contact Us</h4>
                                <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                        <p>Name</p>
                                        <input className="form-control barqia-control" type="text" placeholder="name" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}}/>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                        <p>Name</p>
                                        <input className="form-control" type="text" placeholder="email" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}} />
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                        <p>Name</p>
                                        <input className="form-control" type="text" placeholder="phone" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}} />
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group mt-3">
                                        <p>Name</p>
                                        <input className="form-control" type="text" placeholder="location" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}} />
                                    </div>
                                    </div>
                                    <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                        <p>Message</p>
                                        <input className="form-control" type="textarea" placeholder="message" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}} />
                                    </div>
                                    </div>
                                    <div className="col-lg-12">
                                    <div className="form-group mt-3">
                                    <button type="submit" className="barqia-button" style={{marginTop: '18px'}}><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                            <div className="col-lg-5 bg-image" style={{backgroundImage: 'url(https://static.wixstatic.com/media/d185a5_f3258ff5a814488589edcca777eda2aa~mv2.png/v1/crop/x_31,y_11,w_610,h_355/fill/w_470,h_272,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d185a5_f3258ff5a814488589edcca777eda2aa~mv2.png)', backgroundRepeat: 'no-repeat'}} >
                            <div className="detail-box p-4">
                                {/**
                                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                                <p className="text-white op-7">Madrid
                                <br /> Spain</p>
                                 */}
                                {/*
                                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                                <p className="text-white op-7">251 546 9442
                                <br /> 630 446 8851</p>
                                <div className="round-social light">
                                    <a href="#" className="ml-0 text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-facebook"></i></a>
                                    <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-twitter"></i></a>
                                    <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-youtube"></i></a>
                                </div>
                                */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact;