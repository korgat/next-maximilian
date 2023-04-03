import { UserItem } from '@components/common/UserItem';
import { Button } from '@components/ui/Button';
import { IconsE } from '@components/ui/Icon/Icon.types';
import Logo from '@components/ui/Logo/Logo';
import Navigation from './components/Navigation';
import { navItems } from './config/navigationItems';

interface HeaderPropsI {}

const Header: React.FC<HeaderPropsI> = () => {
  return (
    <header className="flex items-center pt-5 pb-4 max-w-[1200px] border-b">
      <Logo />
      <Navigation className="ml-[240px]" items={navItems} />
      <UserItem className="ml-auto" user={{ name: 'Oleg Grinka', photo: '' }} />
      <Button className="ml-10" text="LogOut" rightIcon={IconsE.LOGOUT} />
    </header>
  );
};

export default Header;
