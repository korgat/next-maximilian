import Image from 'next/image';
import { Icon } from '@components/ui/Icon';
import { IconsE } from '@components/ui/Icon/Icon.types';
import { UserI } from '@interfaces/api/types';

interface UserItemI {
  className?: string;
  user: UserI;
}

const UserItem: React.FC<UserItemI> = ({ user, className }) => {
  const baseClass = ['flex gap-4 items-center'];
  className && baseClass.push(className);

  return (
    <div className={baseClass.join(' ')}>
      <div className="text-gray-500 whitespace-nowrap">{user.name}</div>
      {user.photo ? (
        <Image className="w-10" src={user.photo} alt="user photo" />
      ) : (
        <Icon icon={IconsE.USER} className="fill-gray-500 rounded-full w-10" />
      )}
    </div>
  );
};

export default UserItem;
