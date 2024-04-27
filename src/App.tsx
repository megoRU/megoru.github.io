// import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Navigation from './page/navigation/Navigation.tsx';
import Contact from './page/Contact';

const App = () => {

    return (
        <Router>
            <div>
                <Navigation /> {/* Показываем навигацию над Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;