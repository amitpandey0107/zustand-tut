import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home'
import APIDemo from './apidemo';
import CounterApp from './counter';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/apidemo' element={<APIDemo />} />
            <Route path='/counter' element={<CounterApp />} />
        </Routes>
    );
}

export default App;
