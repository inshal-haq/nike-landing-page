const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "border-coral-red bg-coral-red text-white"}
    `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
