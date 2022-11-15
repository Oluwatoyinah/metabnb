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

const cardImages = [
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
  cardImg9,
  cardImg10,
  cardImg11,
  cardImg12,
  cardImg13,
  cardImg14,
  cardImg15,
  cardImg16,
]
const PlaceToStay = () => {
  return (
    <>
      <section className="min-h-[50vh] py-14 px-3">
        <div className="container mx-auto">  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardImages.map((_, i) => (
              <Card key={i} imgSrc={_} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceToStay;
