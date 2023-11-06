import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.tsx';

import Home from './pages/Home.tsx';
import AboutUs from './pages/AboutUs.tsx';
import WhatWeDo from './pages/WhatWeDo.tsx';
import RaceWithUs from './pages/RaceWithUs.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import Events from './pages/Events.tsx';
import DecemberHackJam from './pages/Events/DecemberHackJam.tsx';
import Contact from './pages/Contact.tsx';
import World from './pages/World.tsx';

function App() {
  return (
    <div className="App" style={{background: 'black'}}>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
<<<<<<< HEAD
      { window.location.pathname != "/Events/DecemberHackJam" && <NavBar /> }
=======
      <NavBar />
>>>>>>> 0269165ce47a0ee41c6ac37db314c4f71b13fe3c
      <Routes>
          <Route index element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='WhatWeDo' element={<WhatWeDo />} />
          <Route path='RaceWithUs' element={<RaceWithUs />} />
          <Route path='CaseStudies' element={<CaseStudies />} />
<<<<<<< HEAD
          <Route path='Events' element={<Events />} />
          <Route path='Events/DecemberHackJam' element={<DecemberHackJam />} />
=======
>>>>>>> 0269165ce47a0ee41c6ac37db314c4f71b13fe3c
          <Route path='Contact' element={<Contact />} />
          <Route path='World' element={<World />} />
      </Routes>
    </div>
  );
}

export default App;
