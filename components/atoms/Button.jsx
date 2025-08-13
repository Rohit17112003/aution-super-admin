const Button = ({ label, style }) => {
  return (
    <button className={`${style} mx-auto rounded-full bg-light py-3 md:py-2.5 text-yellow font-medium text-lg md:text-lg cursor-pointer`}>
      {label}
    </button>
  );
};

export default Button;
