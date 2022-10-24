import logo from './assets/logo_movie.png';
import React from "react";
import "./App.css";

// import NavBar from "./components/NavBar.jsx";
import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';
import LoginLayout from "./components/LoginLayout";
import ListMovie from './components/ListMovie';
import { Outlet } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <NavBar /> */}

      <AppNavBar />
      <ListMovie />
      <Footer />
      {/* <LoginLayout /> */}
      <Outlet />
    </div>
  );
}

export default App;
