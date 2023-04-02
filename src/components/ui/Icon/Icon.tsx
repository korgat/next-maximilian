import { IconsE } from './Icon.types';

interface IconPropsI {
  icon: IconsE;
  className?: string;
}

// icon - svg path (icomoon)
// size and color changes by className

const Icon: React.FC<IconPropsI> = ({ icon, className = '' }) => {
  return (
    <svg className={className} height="100%" viewBox="0 0 1024 1024" fill="currentColor">
      <path d={icon}></path>
    </svg>
  );
};

export default Icon;
