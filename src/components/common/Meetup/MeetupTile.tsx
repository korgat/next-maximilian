import { Button } from '@components/ui/Button';
import { MeetupI } from '@interfaces/api/types';
import Link from 'next/link';

interface MeetupTilePropsI extends MeetupI {
  highLightImportant?: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const MeetupTile: React.FC<MeetupTilePropsI> = ({
  title,
  address,
  id,
  img,
  shortDesc,
  isImportant,
  highLightImportant,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="rounded-lg shadow-md transform ">
      {highLightImportant && isImportant && (
        <div className="text-yellow-400 font-bold text-8xl absolute z-10 top-[-35px] left-[-15px]">
          !
        </div>
      )}
      <Link href={`/meetups/${id}`}>
        <img
          className="cursor-pointer hover:-translate-y-0.5 hover:shadow-xl transition-all duration-500"
          src="https://wallpapercave.com/wp/wp9045170.jpg"
          alt="meetup"
        />
      </Link>

      <div className="px-8 py-8">
        <h3 className="text-center mb-3 font-medium text-lg">{title}</h3>
        <div className="text-center mb-2 text-gray-600">{address}</div>
        <p className="mb-8">{shortDesc}</p>
        <div className="flex justify-end gap-6">
          <Button onClick={() => onEdit(id)} text="Edit Meetup" fill="true" />
          <Button
            onClick={() => onDelete(id)}
            text="Delete Meetup"
            fill="bg-red-600 hover:bg-red-400 "
          />
        </div>
      </div>
    </div>
  );
};

export default MeetupTile;
