import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import VideoMetaverse from '../components/VideoMetaverse/VideoMetaverse.tsx'

const Home = () => {
    return (
        <div>
            <VideoMetaverse />
            
            <img id="360-mobile-rotate-sample" src='gifs/rotate.gif' style={{margin: 'auto', width: '50%'}} />

            <div style={{color: 'white', float: 'right', width: '50%'}}>
                <h1>Increment fan engagement</h1>
                <p>Make a technological transformation directly applied to the entertainment of your fans</p>

                <h1>Technology transformation</h1>
                <p>Creates a closer relationship between the fan and the club or athlete, achieving an engagement of maximum interaction</p>

                <h1>Unlimited tickets</h1>
                <p>Offer unlimited tickets thanks to our immersive technology</p>

                <h1>Experiences</h1>
                <p>Offer innovative and technological services to your fans and they will return it to you</p>
            </div>
        </div>
    )
}

export default Home;