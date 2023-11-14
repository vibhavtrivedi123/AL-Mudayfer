import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Media from './screens/Media/Media';
import About from './screens/About/About';
import Investment from './screens/Investment/Investment';
import Join from './screens/Join/Join';
import Contact from './screens/Contact/Contact';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import Sample from './sample/Sample';
import Social_Responsibility from './screens/Social/Social_Responsibility';
import National from './screens/National/National';
import Environmental from './screens/Environmental/Environmental';

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
        <Route path='/national' element={<National />} />
        <Route path='/environmental' element={<Environmental />} />
        <Route path='/social_responsibility' element={<Social_Responsibility />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
      <ToastContainer />

      {/* test */}
      {/* <Sample /> */}
    </>
  )
}

export default App