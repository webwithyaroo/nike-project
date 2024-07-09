function ServiceItem({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 justify-center bg-coral-red rounded-full flex">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="text-3xl font-montserrat font-semibold mt-4 mb-3 leading-normal">
        {label}
      </h3>
      <p className=" text-lg break-words font-montserrat leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
}
export default ServiceItem;
