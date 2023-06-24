import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import SideBar from './components/Sidebar'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <div className="overflow-hidden">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                </Routes>
                <SideBar />
            </Router>
        </div>
    )
}

export default App