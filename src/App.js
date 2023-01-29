
import React from "react";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Rowpost from "./Components/Rowpost/Rowpost";
import {Action,originals,ComedyMovies,HorrorMovies,RomanceMovies} from "./urls"

function App() {
  return (
        <div className="app">
        <NavBar/>
        <Banner/>
        <Rowpost url={originals}  title="Netflix originals"/>
        <Rowpost url={Action} title="Action Movies" issmal/>
        <Rowpost url={ComedyMovies} title="Comedy Movies" issmal/>
        <Rowpost url={HorrorMovies} title="Horror Movies" issmal/>
        <Rowpost url={RomanceMovies} title="Romance Movies" issmal/>
        <Footer/>
        </div>
    );
}

export default App;
