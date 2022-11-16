import React from 'react'
import MetaBnb from '../assets/images/metabnb-white-logo.svg'
import Facebook from '../assets/images/facebook.png'
import Instagram from '../assets/images/instagram.png'
import Twitter from '../assets/images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark w-full py-10 footer px-6 lg:px-0'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-2 mb-3">
        <div className='flex flex-col justify-between gap-8 lg:gap-2 col-span-full lg:col-auto mb-8 lg:mb-2'>
           <img src={MetaBnb} width="230px" className='' alt="footer logo" />
           <div className='flex gap-6 items-center'>
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
           </div>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/'>Community</Link></li>
            <li>
              <Link to='/'>NFT</Link></li>
            <li>
              <Link to='/'>Tokens</Link></li>
            <li>
              <Link to='/'>Landlords</Link></li>
            <li>
              <Link to='/'>Discord</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/'>Places</Link></li>
            <li>
              <Link to='/'>Castle</Link></li>
            <li>
              <Link to='/'>Farms</Link></li>
            <li>
              <Link to='/'>Beach</Link></li>
            <li>
              <Link to='/'>Learn More</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/'>About Us</Link></li>
            <li>
              <Link to='/'>Road map</Link></li>
            <li>
              <Link to='/'>Creators</Link></li>
            <li>
              <Link to='/'>Career</Link></li>
            <li>
              <Link to='/'>Contact us</Link></li>
          </ul>
        </div> 
      </div>
      <div className="container mx-auto py-5">
        <p>&copy; {new Date().getFullYear()} Metabnb</p>
      </div>
    </div>
  )
}

export default Footer