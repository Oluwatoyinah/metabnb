import React from 'react'
import MetaBnb from '../assets/images/metabnb-white-logo.svg'
import Facebook from '../assets/images/facebook.png'
import Instagram from '../assets/images/instagram.png'
import Twitter from '../assets/images/twitter.png'

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
            <li>Community</li>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Places</li>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
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