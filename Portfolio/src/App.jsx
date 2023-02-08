import React from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div>
            <Header/>
            <Intro/>
            <Services/>
            <About/>
            <Work/>
            <Footer/>
        </div>
    )
}