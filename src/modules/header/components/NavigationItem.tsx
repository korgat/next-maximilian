import Link from 'next/link';
import { NavigationItemI } from '../interfaces/navigation';

interface NavigationItemPropsI {
  item: NavigationItemI;
  active?: boolean;
}

const NavigationItem: React.FC<NavigationItemPropsI> = ({ item, active }) => {
  const baseClass = [
    'group flex justify-center font-medium hover:text-sky-400 relative ease-out duration-300',
  ];
  const underLineClass = [
    'absolute bottom-[-5px] h-[1px] bg-sky-500 group-hover:bg-sky-400 group-hover:w-10 ease-out duration-300',
  ];
  active ? underLineClass.push('w-6') : underLineClass.push('w-0');
  active && baseClass.push('text-sky-500');

  return (
    <li className={baseClass.join(' ')}>
      <Link href={item.path}>{item.title}</Link>
      <div className={underLineClass.join(' ')}></div>
    </li>
  );
};

export default NavigationItem;
