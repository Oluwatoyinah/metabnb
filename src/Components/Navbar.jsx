import React from "react";
import { Link } from "react-router-dom";
import MetaBnb from "../assets/images/metabnb-logo.png";

const Navbar = ({openModal}) => {
  return (
    <div className="container hidden md:flex mx-auto py-5 justify-between items-center">
      <img src={MetaBnb} alt="metabnb logo" />
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/place-to-stay">Place to Stay</Link>
        </li>
        <li>
          <Link to="/">NFTs</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
      </ul>
      <button className="main-btn" onClick={openModal}>Connect Wallet</button>
    </div>
  );
};

export default Navbar;
