import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Metabnb from '../assets/images/metabnb-white-logo.svg'

const MobileNav = ({navActive, closeNav, openModal}) => {
  return (
    <div className={`mobile-nav p-3 ${navActive ? 'active' : ""}`}>
      <div className="text-end close">
        <span className="flex gap-3 items-center justify-end mb-12" onClick={closeNav}>
          <span>Close</span>
          <span>
            <FaTimes />
          </span>
        </span>
      </div>

      <div className="mobile-nav-body uppercase">
        <ul>
          <li onClick={closeNav}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={closeNav}>
            <Link to="/place-to-stay">Place to Stay</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/">NFTs</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/">Community</Link>
          </li>
        </ul>
        <button className="main-btn" onClick={openModal}>Connect Wallet</button>
      </div>
      <div className="text-center">
         <img src={Metabnb} className='w-[100px] mx-auto mb-3' alt="logo" />
      </div>
    </div>
  );
};

export default MobileNav;
