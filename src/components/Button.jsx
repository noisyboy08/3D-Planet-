import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-40 sm:w-48 h-12 sm:h-14 rounded-full bg-primary flex-center mt-8 md:mt-10 px-4">
      <p className="text-black font-semibold text-sm sm:text-base tracking-wide">{text}</p>
    </div>
  );
};

export default Button;