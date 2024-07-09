const Button = ({
  label,
  iconUrl,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-centers font-montserrat px-7 py-4 gap-2 leading-none
        rounded-full border-slate-gray
      ${
        backgroundColor
          ? `${backgroundColor} 
          ${textColor} ${borderColor} ${borderWidth}`
          : " bg-coral-red text-white  border-coral-red "
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="button"
          className="rounded-full ml-2 w-5 aspect-square "
        />
      )}
    </button>
  );
};
export default Button;
