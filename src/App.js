import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home'
import APIDemo from './apidemo';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/apidemo' element={<APIDemo />} />
        </Routes>
    );
}

export default App;
