import { useState } from "react";
import Button from "../Components/Buttons";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className=" max-container w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10   "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center  items-start w-full max-xl:padding-x pt-28 ">
        <p className="lg:text-[32px] text-xl font-monsterrat text-coral-red mt-10">
          Summer Collections
        </p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[75px] font-palanquin font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoe
        </h1>
        <p
          className="font-montserrat text-slate-gray
        mt-6 mb-14 text-lg leading-8 sm:max-w-sm"
        >
          Discover stylish Nike arrival, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin">{stat.value}</p>
              <p className="font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* the shoe collection tab */}
      <div className=" flex flex-1 relative justify-content  items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="z-20 object-contain"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
