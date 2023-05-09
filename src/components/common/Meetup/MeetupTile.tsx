import { Button } from '@components/ui/Button';
import { MeetupI } from '@interfaces/api/types';
import Image from 'next/image';
import Link from 'next/link';

interface MeetupTilePropsI extends MeetupI {
  highLightImportant?: boolean;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const MeetupTile: React.FC<MeetupTilePropsI> = ({
  title,
  address,
  _id,
  image,
  shortDesc,
  isImportant,
  highLightImportant,
  onEdit,
  onDelete,
}) => (
  <div className="rounded-lg shadow-md transform flex flex-col">
    {highLightImportant && isImportant && (
      <div className="text-yellow-400 font-bold text-8xl absolute z-10 top-[-35px] left-[-15px]">
        !
      </div>
    )}
    <Link href={`/meetups/${_id}`}>
      <Image
        className="cursor-pointer h-[200px] object-cover hover:-translate-y-0.5 hover:shadow-xl transition-all duration-500"
        width={300}
        height={200}
        src={image}
        alt="meetup"
      />
    </Link>
    <div className="px-8 py-8 h-full flex flex-col">
      <h3 className="text-center mb-3 font-medium text-lg">{title}</h3>
      <div className="text-center mb-2 text-gray-600">{address}</div>
      <p className="flex-grow mb-5">{shortDesc}</p>
      <div className="flex justify-end gap-6">
        <Button onClick={() => onEdit(_id)} text="Edit Meetup" fill="true" />
        <Button
          onClick={() => onDelete(_id)}
          text="Delete Meetup"
          fill="bg-red-600 hover:bg-red-400 "
        />
      </div>
    </div>
  </div>
);

export default MeetupTile;
