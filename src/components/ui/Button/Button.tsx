import { Icon } from '../Icon';
import { IconsE } from '../Icon/Icon.types';

interface ButtonPropsI {
  className?: string;
  text: string;
  leftIcon?: IconsE;
  rightIcon?: IconsE;
  outlined?: string;
  fill?: string;
}

const Button: React.FC<ButtonPropsI> = ({
  className,
  text,
  outlined,
  fill,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseClass = ['flex items-center px-4 py-2 rounded-lg text-gray-500 hover:text-gray-400'];
  fill && baseClass.push(fill + ' bg-sky-500 hover:bg-sky-400 text-white hover:text-white');
  outlined &&
    baseClass.push(
      outlined + ' border-2 text-gray-700 hover:text-gray-500 border-sky-500 hover:border-sky-400',
    );
  className && baseClass.push(className);

  return (
    <button className={baseClass.join(' ')} type="button" {...props}>
      {leftIcon && <Icon icon={leftIcon} className="w-6 mr-3" />}
      <div className="font-medium text-md whitespace-nowrap">{text}</div>
      {rightIcon && <Icon icon={rightIcon} className="w-6 ml-3" />}
    </button>
  );
};

export default Button;
