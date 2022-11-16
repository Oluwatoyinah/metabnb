import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Star from "../assets/images/star.png";
import { Blurhash } from "react-blurhash";

const Card = ({ imgSrc, hash }) => {
  const [isFavorite, SetIsFavorite] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)
  const selectFavorite = () => {
    SetIsFavorite((prev) => !prev);
  };
  return (
    <div className="p-4 card-box">
      <div>
        <div className="card-box-img mb-4">
          {
            !isLoaded ? (
                <Blurhash
                    hash={hash}
                    width='100%' 
                    height={200}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} 
                />
            ) : null
          }
          <img className={`${isLoaded ? '' : 'hidden'}`} src={imgSrc} onLoad={() => setIsLoaded(true)} alt="location img" />
          <span className="favorite" onClick={selectFavorite}>
            {isFavorite && <FaHeart className="checked" />}
            {!isFavorite && <FaHeart className="unchecked" />}
          </span>
        </div>
        <div className=" text-[#434343]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs leading-[13px] font-normal">
              Desert king
            </span>
            <span className="text-xs leading-[13px] font-bold">
              1MBT per night
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs leading-[13px] font-normal">
              2345km away
            </span>
            <span className="text-xs leading-[13px] font-normal">
              available for 2weeks stay
            </span>
          </div>
          <div className="mb-2">
            <img src={Star} alt="rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
