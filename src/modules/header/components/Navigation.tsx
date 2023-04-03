import { useRouter } from 'next/router';
import { NavigationItemI } from '../interfaces/navigation';
import NavigationItem from './NavigationItem';

interface NavigationPropsI {
  className?: string;
  items: NavigationItemI[];
}

const Navigation: React.FC<NavigationPropsI> = ({ className, items }) => {
  const router = useRouter();

  return (
    <nav className={className}>
      <ul className="flex items-center gap-5 text-gray-600">
        {items.map((obj) => (
          <NavigationItem key={obj.title} item={obj} active={router.pathname === obj.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
