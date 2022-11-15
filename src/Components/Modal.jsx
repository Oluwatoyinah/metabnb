import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Metamusk from '../assets/images/modal-metamusk.png'
import WalletConnect from '../assets/images/wallet-connect.png'
import ArrowRight from '../assets/images/arrow-right.png'

const Modal = ({closeModal}) => {
  return (
    <div className="modal-container">
      <div className="modal-box container mx-auto">
         <div className='w-11/12 md:w-9/12 lg:w-1/2 mx-auto' style={{background: "#fff", minHeight: '300px', borderRadius: "16px"}}>
            <div className="modal-header px-4 py-4 md:px-8 md:py-6 flex justify-between items-center">
                <h5 className="text-lg md:text-2xl font-bold">Connect Wallet</h5>
                <FaTimes onClick={closeModal} />
            </div>
            <div className="modal-body p-5 md:p-8">
              <h6 className='text-[#333333] font-normal text-base mb-3'>Choose your preferred wallet:</h6>
              <div className='modal-body-content'>
                 <div className="px-5 py-3 wallet-box flex items-center justify-between">
                   <div className='wallet flex gap-4 items-center'>
                     <img src={Metamusk} width='44px' alt="metamusk" />
                     <p className='text-lg text-black font-semibold'>Metamask</p>
                   </div>
                   <img src={ArrowRight} alt="arrow right" />
                 </div>
                 <div className="px-5 py-3 wallet-box flex items-center justify-between">
                   <div className='wallet flex gap-4 items-center'>
                     <img src={WalletConnect} width='44px' alt="wallet connect" />
                     <p className='text-lg text-black font-semibold'>WalletConnect</p>
                   </div>
                   <img src={ArrowRight} alt="arrow right" />
                 </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Modal