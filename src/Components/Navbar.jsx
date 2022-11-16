import React from "react";
import { Link } from "react-router-dom";
import MetaBnb from "../assets/images/metabnb-logo.png";

const Navbar = ({openModal, openNav}) => {
  return (
    <div className="container flex mx-auto py-5 justify-between items-center px-5 md:px-0">
      <img src={MetaBnb} className='w-[180px] sm:w-[230px]' alt="metabnb logo" />
      <ul className="nav-list hidden lg:flex gap-10">
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
      <button className="main-btn hidden lg:block" onClick={openModal}>Connect Wallet</button>
      <div className="hamburger lg:hidden " onClick={openNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
