import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";
const CustomersReview = () => {
  return (
    <section className="max-container">
      <h3 className="capitalize font-palanquin font-bold text-center text-3xl ">
        what our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from satisfied customers about their exceptional
        experience with us
      </p>
      <div className="mt-24 flex justify-evenly flex-1 flex-col lg:flex-row gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomersReview;
