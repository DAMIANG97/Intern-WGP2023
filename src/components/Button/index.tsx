import React, { FunctionComponent } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="m-2 p-4 text-white rounded-xl transition-all duration-500 bg-gradient-to-l from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
      >
      {children}
    </button>
  );
};

export default Button;
