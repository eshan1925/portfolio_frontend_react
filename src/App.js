import React from "react";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Achievements from "./container/Achievements/Achievements";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Achievements />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
