import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CoreMember from './pages/CoreMember';
const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/core-members' element={<CoreMember />} />
        </Routes>
    )
}

export default App