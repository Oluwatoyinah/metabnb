import React from 'react'
import MBToken from '../assets/images/mbToken.svg'
import MetaMusk from '../assets/images/metamusk.svg'
import OpenSea from '../assets/images/opensea.svg'

const PurpleBanner = () => {
  return (
    <div className="purple-banner py-4">
        <div className="container mx-auto text-center ">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-6 lg:gap-3 w-11/12 mx-auto">
                <img src={MBToken} className='w-[180px] lg:w-[220px]' alt="mb token" />
                <img src={MetaMusk} className='w-[180px] lg:w-[220px]' alt="metamusk" />
                <img src={OpenSea} className='w-[180px] lg:w-[220px]' alt="opensea" />
            </div>
        </div>
    </div>
  )
}

export default PurpleBanner