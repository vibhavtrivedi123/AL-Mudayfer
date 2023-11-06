import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Media from './screens/Media/Media';
import About from './screens/About/About';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/media' element={<Media />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App