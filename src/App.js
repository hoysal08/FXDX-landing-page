import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BattleTested from "./components/BattleTested";
import Derivatives from "./components/Derivatives";
import Algo from "./components/Algo";
import Features from "./components/Features";
import Exchange from "./components/Exchange";
import Investors from "./components/Investors";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Hero></Hero>
            <BattleTested></BattleTested>
            <Derivatives></Derivatives>
            <Algo></Algo>
            <Features></Features>
            <Exchange></Exchange>
            <Investors></Investors>
            <Footer></Footer>
        </div>
    );
}

export default App;
