import { Button } from '@components/ui/Button';
import Link from 'next/link';
import { IconsE } from '@components/ui/Icon/Icon.types';
import { MeetupI } from '@interfaces/api/types';
import Image from 'next/image';

interface MeetupRowPropsI extends MeetupI {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const MeetupRow: React.FC<MeetupRowPropsI> = ({
  title,
  address,
  _id,
  image,
  shortDesc,
  isImportant,
  onEdit,
  onDelete,
}) => (
  <div className="flex  mb-6 pb-4 border-b">
    <Link href={`meetups/${_id}`}>
      <div className="flex h-[100px] cursor-pointer relative">
        {isImportant && (
          <div className="text-sky-500 font-bold text-6xl absolute z-10 top-[-30px] left-[-10px]">
            !
          </div>
        )}
        <Image
          className="cursor-pointer object-cover w-[120px]"
          width={150}
          height={100}
          src={image}
          alt={title}
        />
        <div className="ml-6 grid grid-cols-6 gap-4">
          <h3 className="flex items-center font-medium text-lg">{title}</h3>
          <div className="flex items-center text-center mb-2 text-gray-600">{address}</div>
          <p className="flex items-center col-span-3">{shortDesc}</p>
        </div>
      </div>
    </Link>
    <div className="flex items-center">
      <Button
        onClick={() => onEdit(_id)}
        className="true flex justify-center text-blue-500 hover:text-blue-400"
        rightIcon={IconsE.EDIT}
      />
      <Button
        onClick={() => onDelete(_id)}
        className="flex justify-center text-red-500 hover:text-red-400"
        rightIcon={IconsE.DELETE}
      />
    </div>
  </div>
);

export default MeetupRow;
