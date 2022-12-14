import React, { useState } from "react";
import NFTImage from "../assets/images/houses.png";
import Card from "../Components/Card";
import PurpleBanner from "../Components/PurpleBanner";
import BannerImg from "../assets/images/header-image.png";
import cardImg1 from "../assets/images/location/1.png";
import cardImg2 from "../assets/images/location/2.png";
import cardImg3 from "../assets/images/location/3.png";
import cardImg4 from "../assets/images/location/4.png";
import cardImg5 from "../assets/images/location/5.png";
import cardImg6 from "../assets/images/location/6.png";
import cardImg7 from "../assets/images/location/7.png";
import cardImg8 from "../assets/images/location/8.png";
import { Blurhash } from "react-blurhash";

const cardImages = [
  {
    imgUrl: cardImg1,
    hash: "LID9Z5bX0DnPKlkDrWi_0DjZ~3X8",
  },
  {
    imgUrl: cardImg2,
    hash: "LB8WqRAE4-,nS.bHsjni0gxG?EI=",
  },
  {
    imgUrl: cardImg3,
    hash: "LMD9b]JC01xrtpahnzof0ew]-oNd",
  },
  {
    imgUrl: cardImg4,
    hash: "L47,j1xG00Rj^ms.9uNM0gn}}*Ey",
  },
  {
    imgUrl: cardImg5,
    hash: "L5B3Q}0LH@}u;VMxyB-XrXx]IoaK",
  },
  {
    imgUrl: cardImg6,
    hash: "LYIEb{nlD{R%subEW9ajEFWroFo0",
  },
  {
    imgUrl: cardImg7,
    hash: "L56uMBf900R$t.ogR5Ri00WV~Wj?",
  },
  {
    imgUrl: cardImg8,
    hash: "LPA^CbspD%Sx%QjbV?kBD*fixpah",
  },
];

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [nftLoaded, setNftLoaded] = useState(false)

  return (
    <div className="">
      <section className="min-h-[50vh] py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-0 gap-8">
          <div className="flex items-center">
            <div className="w-full">
              <h1 className="text-[44px] sm:text-[56px] tracking-tight leading-[140%] mb-5 font-normal text-[#434343]">
                Rent a <span className="tx-purple font-bold">Place</span> away
                from <span className="tx-purple font-bold">Home</span> in the{" "}
                <span className="tx-purple font-bold">Metaverse</span>
              </h1>
              <p className="mb-10 text-xl leading-[35px] font-normal text-[#434343]">
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
              <div className="search flex w-full">
                <input
                  type="text"
                  placeholder="Search for location"
                  style={{ minWidth: "65%" }}
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="text-center">
            {!imageLoaded ? (
              <Blurhash
                hash="KRECM2$mn~%2D|jb-ae?s+"
                width="90%"
                height={400}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            ) : null}
            <img
              src={BannerImg}
              className={`w-[90%] mx-auto ${imageLoaded ? "" : "hidden"}`}
              alt="nftimages"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      </section>
      <PurpleBanner />
      <section className="min-h-[50vh] py-14 px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Inspiration for your next adventure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardImages.map((_, i) => (
              <Card key={i} imgSrc={_.imgUrl} hash={_.hash} />
            ))}
          </div>
        </div>
      </section>
      <section className="nft-section py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-0 gap-8">
          <div className="flex items-center">
            <div className="w-full sm:w-4/5">
              <h2 className="text-4xl sm:text-5xl mb-7 font-bold">
                Metabnb NFTs
              </h2>
              <p className="mb-10 text-lg font-normal">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <button className="white-btn">Learn More</button>
            </div>
          </div>
          <div className="text-center">
            {
              !nftLoaded ? (
                <Blurhash
                  hash="KLG[229uE9EW$t%1wUVyxu"
                  width="90%"
                  height={400}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              ) : null
            }
            <img
              src={NFTImage}
              className={`w-[90%] mx-auto md:w-full ${nftLoaded ? '' : 'hidden'}`}
              alt="nftimages"
              onLoad={() => setNftLoaded(true)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
