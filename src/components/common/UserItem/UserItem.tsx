import Image from 'next/image';
import Icon from '@components/ui/Icon/Icon';

import { IconsE } from '@components/ui/Icon/Icon.types';
import { UserI } from '@interfaces/api/user';

interface UserItemI {
  className?: string;
  user: UserI;
}

const UserItem: React.FC<UserItemI> = ({ user, className }) => {
  const baseClass = ['flex gap-4 items-center'];
  className && baseClass.push(className);

  return (
    <div className={baseClass.join(' ')}>
      <div className="text-gray-500">{user.name}</div>
      {user.photo ? (
        <Image src={user.photo} alt="user photo" />
      ) : (
        <Icon icon={IconsE.USER} className="fill-gray-500 rounded-full" />
      )}
    </div>
  );
};

export default UserItem;
