import React from 'react' 
import Star from '../assets/images/star.png'

const Card = ({imgSrc}) => {
  return (
    <div className='p-4 card-box'>
        <div>
            <div className='card-box-img mb-4'>
                <img src={imgSrc} alt="location img" />
            </div>
            <div className=' text-[#434343]'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-xs leading-[13px] font-normal'>Desert king</span>
                    <span className='text-xs leading-[13px] font-bold'>1MBT per night</span>
                </div>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-xs leading-[13px] font-normal'>2345km away</span>
                    <span className='text-xs leading-[13px] font-normal'>available for 2weeks stay</span>
                </div>
                <div>
                    <img src={Star} alt="rating" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card