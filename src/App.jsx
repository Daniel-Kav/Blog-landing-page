import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Feature2 from "./components/SecondSection";
import Feature3 from "./components/ThirdSection";
import Footer from "./components/Footer";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Hero />
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
