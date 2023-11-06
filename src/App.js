import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Media from './screens/Media/Media';
import About from './screens/About/About';
import Investment from './screens/Investment/Investment';
import Join from './screens/Join/Join';
import Contact from './screens/Contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<About />} />
        <Route path='/media' element={<Media />} />
        <Route path='/investment' element={<Investment />} />
        <Route path='/join' element={<Join />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App