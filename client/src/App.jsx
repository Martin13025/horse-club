import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Horses from './pages/Horses'
import Riders from './pages/Riders'
import BookingForm from './pages/BookingForm'
import Header from './components/Header'

export default function App(){
  return (
    <div className="app">
      <Header />
      <nav style={{padding:10}}>
        <Link to="/">Horses</Link> | <Link to="/riders">Riders</Link> | <Link to="/book">Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Horses/>} />
        <Route path="/riders" element={<Riders/>} />
        <Route path="/book" element={<BookingForm/>} />
      </Routes>
    </div>
  )
}
