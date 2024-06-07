import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer, GoToTop } from "./Components";
import { Home, About, Services, Contact, Error } from "./Pages";

function App() {
  return (
    <>
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
