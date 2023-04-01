interface ButtonPropsI {
  text: string;
}

const Button: React.FC<ButtonPropsI> = ({ text }) => {
  return <button className="bg-sky-500 text-red-500">{text}</button>;
};

export default Button;
