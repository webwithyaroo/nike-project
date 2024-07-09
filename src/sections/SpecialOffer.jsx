import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Buttons from "../Components/Buttons";
const SpecialOffer = () => {
  return (
    <section className="flex  items-center max-container  max-lg:flex-col-reverse gap-10 ">
      <div>
        <img
          src={offer}
          alt="shoe collection"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className=" sm:text-4xl text-3xl font-bold font-palanquin lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="info-text mt-4 mb-5 lg:max-w-lg">
          Ensuring premium comfort and style , our meticulously crafted footware
          is designed to elevate your experience, providing you with unmatched
          quality, innivation, and a touch of elegance
        </p>
        <div className="flex items-center justify-start gap-5">
          <Buttons label="View details" iconUrl={arrowRight} />
          <Buttons
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            borderWidth="border-2"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
