import Button from "../Components/Buttons";

const Subscribe = () => {
  return (
    <section
      className="max-container items-center justify-between flex max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="cappitalize text-4xl leading-[68px] lg:max-w-xl font-palanquin font-bold">
        Sign up for <span className="text-coral-red">updates</span> & newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-[40px]">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="subscribe" />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
