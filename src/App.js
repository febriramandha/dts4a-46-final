// import logo from './assets/logo_movie.png';
import React from "react";
import "./App.css";

// import NavBar from "./components/NavBar.jsx";
import AppNavBar from './components/AppNavBar';
import Footer from './components/Footer';
// import LoginLayout from "./components/LoginLayout";
// import ListMovie from './components/ListMovie';
import { Outlet } from "react-router-dom";


function App() {
  // const navigate = useNavigate();
  // const [user, isloading, error] = useAuthState(auth);

  // kalau tidak ada yg login arahkan ke "/login"

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
      {/* <ListMovie /> */}
      {/* <LoginLayout /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
