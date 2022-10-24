import React from "react";
import { Link } from "react-router-dom";
import '../assets/style.css';
import logo from '../assets/logo_movie.png';
import iconSearch from '../assets/icon_search.png';
import iconGift from '../assets/icon_gift.png';
import iconLonceng from '../assets/icon_lonceng.png';
import iconProfileIMG from '../assets/ProfileIMG.png';

const NavBar = () => {
    return (
        // <Link to="/" style={{ textDecoration: "none" }}>
        //     <button>Home</button>
        // </Link>

        <div className="header">
            <div className="header-left">
                <img src={logo} className="logoheader" alt="logo" />
            </div>
            <div className="header-center">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-link">Home</p>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-link">Series</p>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-link">Movies</p>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-link">New and Popular</p>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-link">My List</p>
                </Link>
            </div>
            <div className="header-right">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={iconSearch} className="nav-link" alt="iconSearch" />
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p className="nav-link">Febri</p>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={iconGift} className="nav-link" alt="iconGift" />
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={iconLonceng} className="nav-link" alt="iconLonceng" />
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={iconProfileIMG} className="nav-link" alt="iconProfileIMG" />
                </Link>
            </div>
        </div>

    );
};

export default NavBar;