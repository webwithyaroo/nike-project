import { star } from "../assets/icons";
function ProductCard({ imgURL, name, price }) {
  return (
    <div>
      <img src={imgURL} alt="shoe collection" />
      <div
        className="flex items-center justify-start
      gap-3 mt-5"
      >
        <img src={star} alt="ratings" />
        <p className="text-[17px]">(4.5)</p>
      </div>
      <p className="lg:text-3xl text-2xl mt-2 font-semibold">{name}</p>
      <p className="text-xl text-coral-red">{price}</p>
    </div>
  );
}
export default ProductCard;
