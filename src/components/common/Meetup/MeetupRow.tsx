import { Button } from '@components/ui/Button';
import { IconsE } from '@components/ui/Icon/Icon.types';
import { MeetupI } from '@interfaces/api/types';
import Link from 'next/link';

interface MeetupRowPropsI extends MeetupI {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const MeetupRow: React.FC<MeetupRowPropsI> = ({
  title,
  address,
  id,
  img,
  shortDesc,
  isImportant,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex h-[100px] cursor-pointer relative mb-6 pb-4 border-b">
      {isImportant && (
        <div className="text-sky-500 font-bold text-6xl absolute z-10 top-[-30px] left-[-10px]">
          !
        </div>
      )}
      <img
        className="cursor-pointer"
        src="https://wallpapercave.com/wp/wp9045170.jpg"
        alt="meetup"
      />

      <div className="ml-6 grid grid-cols-6 gap-4">
        <h3 className="flex items-center font-medium text-lg">{title}</h3>
        <div className="flex items-center text-center mb-2 text-gray-600">{address}</div>
        <p className="flex items-center col-span-3">{shortDesc}</p>
        <div className="flex items-center">
          <Button
            onClick={() => onEdit(id)}
            className="true flex justify-center text-blue-500 hover:text-blue-400"
            rightIcon={IconsE.EDIT}
          />
          <Button
            onClick={() => onDelete(id)}
            className="flex justify-center text-red-500 hover:text-red-400"
            rightIcon={IconsE.DELETE}
          />
        </div>
      </div>
    </div>
  );
};

export default MeetupRow;
