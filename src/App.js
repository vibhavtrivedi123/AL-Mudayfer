import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Media from "./screens/Media/Media";
import About from "./screens/About/About";
import Investment from "./screens/Investment/Investment";
import Join from "./screens/Join/Join";
import Contact from "./screens/Contact/Contact";
import PageNotFound from "./screens/PageNotFound/PageNotFound";
import Sample from "./sample/Sample";
import Social_Responsibility from "./screens/Social/Social_Responsibility";
import National from "./screens/National/National";
import Environmental from "./screens/Environmental/Environmental";
import Omrania_crushers from "./company_pages/Omrania_crushers/Omrania_crushers";
import Omrania_concrete from "./company_pages/Omrania_concrete/Omrania_concrete";
import Omrania_material from "./company_pages/Omrania_materials/Omrania_material";
import Omrania_metalPower from "./company_pages/Omrania_metalPower/Omrania_metalPower";
import Omrania_landTransport from "./company_pages/Omrania_landTransport/Omrania_landTransport";
import Omrania_woodProducts from "./company_pages/Omrania_woodProducts/Omrania_woodProducts";
import SaudiPlayer_polishingMaterials from "./company_pages/SaudiPlayer_polishingMaterials/SaudiPlayer_polishingMaterials";
import Omrania_logisticSupport from "./company_pages/Omrania_logisticSupport/Omrania_logisticSupport";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/join" element={<Join />}  />
        <Route
          path="/join/:id"
          element={<Join />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/investment/national_responsibility"
          element={<National />}
        />
        <Route
          path="/investment/environmental_responsibility"
          element={<Environmental />}
        />
        <Route
          path="/investment/social_responsibility"
          element={<Social_Responsibility />}
        />
        <Route
          path="/investment/omrania_crusher"
          element={<Omrania_crushers />}
        />
        {/*company 1 */}
        <Route
          path="/investment/omrania_concrete"
          element={<Omrania_concrete />}
        />
        {/*company 2 */}
        <Route
          path="/investment/omrania_material"
          element={<Omrania_material />}
        />
        {/*company 3 */}
        <Route
          path="/investment/omrania_metal_power"
          element={<Omrania_metalPower />}
        />
        {/*company 4 */}
        <Route
          path="/investment/omrania_wood_products"
          element={<Omrania_woodProducts />}
        />
        {/*company 5 */}
        <Route
          path="/investment/SaudiPlayer_polishing_materials"
          element={<SaudiPlayer_polishingMaterials />}
        />
        {/*company 6 */}
        <Route
          path="/investment/omrania_land_transport"
          element={<Omrania_landTransport />}
        />
        {/*company 7 */}
        <Route
          path="/investment/omrania_logistic_support"
          element={<Omrania_logisticSupport />}
        />
        {/*company 8 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
      <ToastContainer />

      {/* test */}
      {/* <Sample /> */}
    </>
  );
};

export default App;
