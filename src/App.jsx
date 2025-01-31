import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Routes>
                    <Route path="/" element={<HomeLayout />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
