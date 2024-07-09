import { products } from "../constants";
import ProductCard from "../Components/ProductCard";
const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 scroll-smooth "
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" sm:text-4xl text-3xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-2xl lg:max-w-lg text-slate-gray">
          Experience top-notch quality and style with our sought-after
          Selection. Discover a world of Comfort, design , and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <ProductCard key={products.name} {...product} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
