import Buttons from "../Components/Buttons";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" sm:text-4xl text-3xl font-bold font-palanquin lg:max-w-lg">
          We Provide You <span className="text-coral-red ">Super</span>
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 mb-5 lg:max-w-lg">
          Ensuring premium comfort and style , our meticulously crafted footware
          is designed to elevate your experience, providing you with unmatched
          quality, innivation, and a touch of elegance
        </p>
        <div>
          <Buttons label="View details" iconUrl={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe collection"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
