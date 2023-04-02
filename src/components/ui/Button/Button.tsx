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
  const baseClass = ['flex items-center px-4 py-2 rounded-lg'];
  fill && baseClass.push(fill + ' bg-sky-500 hover:bg-sky-600 text-white');
  outlined && baseClass.push(outlined + ' border-2 border-sky-500 hover:border-sky-600');
  className && baseClass.push(className);

  return (
    <button className={baseClass.join(' ')} type="button" {...props}>
      {leftIcon && <Icon icon={leftIcon} className="w-6 mr-2" />}
      <div className="font-semibold text-lg whitespace-nowrap">{text}</div>
      {rightIcon && <Icon icon={rightIcon} className="w-6 ml-2" />}
    </button>
  );
};

export default Button;
