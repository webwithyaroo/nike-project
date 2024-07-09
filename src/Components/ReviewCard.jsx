import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120] mt-14"
      />
      <p className="info-text max-w-sm text-center mt-4">{feedback}</p>
      <div className="flex items-center  mt-3 gap-2.5">
        <img
          src={star}
          alt="ratings"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="text-3xl font-palanquin text-center  font-bold">
        {customerName}
      </h3>
    </div>
  );
}
export default ReviewCard;
