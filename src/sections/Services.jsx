import { services } from "../constants";
import ServiceItem from "../Components/ServiceItem";
const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((item) => (
        <ServiceItem key={item.label} {...item} />
      ))}
    </section>
  );
};
export default Services;
