import React from "react";
import cardImg1 from '../assets/images/places/1.png'
import cardImg2 from '../assets/images/places/2.png'
import cardImg3 from '../assets/images/places/3.png'
import cardImg4 from '../assets/images/places/4.png'
import cardImg5 from '../assets/images/places/5.png'
import cardImg6 from '../assets/images/places/6.png'
import cardImg7 from '../assets/images/places/7.png'
import cardImg8 from '../assets/images/places/8.png'
import cardImg9 from '../assets/images/places/9.png'
import cardImg10 from '../assets/images/places/10.png'
import cardImg11 from '../assets/images/places/11.png'
import cardImg12 from '../assets/images/places/12.png'
import cardImg13 from '../assets/images/places/13.png'
import cardImg14 from '../assets/images/places/14.png'
import cardImg15 from '../assets/images/places/15.png'
import cardImg16 from '../assets/images/places/16.png'
import Card from "../Components/Card";
import Settings from '../assets/images/settings.png'

const cardImages = [
  {
    imgUrl: cardImg1,
    hash: 'L5B3Q}0LH@}u;VMxyB-XrXx]IoaK'
  },
  {
    imgUrl: cardImg2,
    hash: 'LYIEb{nlD{R%subEW9ajEFWroFo0'
  },
  {
    imgUrl: cardImg3,
    hash: 'L56uMBf900R$t.ogR5Ri00WV~Wj?'
  },
  {
    imgUrl: cardImg4,
    hash: 'LPA^CbspD%Sx%QjbV?kBD*fixpah'
  },
  {
    imgUrl: cardImg5,
    hash: 'LID9Z4bX0CnPKlkDrWi_0CjZ~3X8'
  },
  {
    imgUrl: cardImg6,
    hash: 'LB8WqRAE4-,nS.bHsjni0gxG?EI='
  },
  {
    imgUrl: cardImg7,
    hash: 'LMD9b]JC01xrtpahnzof0ew]-oNd'
  },
  {
    imgUrl: cardImg8,
    hash: 'L47,j1xG00Rj^ms.9uNM0gn}}*Ey'
  },
  {
    imgUrl: cardImg9,
    hash: 'LQH_BCWZD{aJ^8R-ORt25Lj?x7of'
  },
  {
    imgUrl: cardImg10,
    hash: 'L68Eoc%N00NLDhRhr:V{00N1_M$|'
  },
  {
    imgUrl: cardImg11,
    hash: 'LDOV[YtQ.8xbyCt7e.Rk.mWVMdWB'
  },
  {
    imgUrl: cardImg12,
    hash: 'LbN11Sfk_Na#%2f5S5fl%hj[IUWC'
  },
  {
    imgUrl: cardImg13,
    hash: 'L58gvr-i009KGIjFvykW04E2~S?Y'
  },
  {
    imgUrl: cardImg14,
    hash: 'LXF}ReWAMroa#woZR}a$I6kEozad'
  },
  {
    imgUrl: cardImg15,
    hash: 'LAB|8XSm02t30JV:=.i{01%O~pM{'
  },
  {
    imgUrl: cardImg16,
    hash: 'LFH^=so{0HMy^-j=i^kD0YV[-Lt8'
  }
]

const PlaceToStay = () => {
  return (
    <>
      <section className="min-h-[50vh] py-8 md:py-14 px-3">
        <div className="container mx-auto">  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-9 py-6 items-center">
          <span className="font-normal text-base text-[#434343]">Resturant</span>
          <span className="font-normal text-base text-[#434343]">Cottage</span>
          <span className="font-normal text-base text-[#434343]">Castle</span>
          <span className="font-normal text-base text-[#434343]">fantast city</span>
          <span className="font-normal text-base text-[#434343]">beach</span>
          <span className="font-normal text-base text-[#434343]">Carbins</span>
          <span className="font-normal text-base text-[#434343]">Off-grid</span>
          <span className="font-normal text-base text-[#434343]">Farm</span>
          <span className="location px-3 py-3.5 gap-2 flex justify-between items-center text-[#333333]">
            <span className="text-sm">Location</span>
            <span>
              <img src={Settings} alt="settings" />
            </span>
          </span> 
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardImages.map((_, i) => (
              <Card key={i} imgSrc={_.imgUrl} hash={_.hash} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceToStay;
