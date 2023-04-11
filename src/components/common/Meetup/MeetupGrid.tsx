import { MeetupI } from '@interfaces/api/types';
import MeetupTile from './MeetupTile';

interface MeetupListProps {
  meetups: MeetupI[];
  highLightImportant?: boolean;
}

const MeetupGrid: React.FC<MeetupListProps> = ({ meetups, highLightImportant }) => {
  const editTileHandler = (id: number) => {};
  const deleteTileHandler = (id: number) => {};
  return (
    <ul className="grid grid-cols-2 gap-8">
      {meetups.map((obj) => (
        <MeetupTile
          key={obj.id}
          title={obj.title}
          img={obj.img}
          id={obj.id}
          shortDesc={obj.shortDesc}
          address={obj.address}
          isImportant={obj.isImportant}
          highLightImportant={highLightImportant}
          onDelete={deleteTileHandler}
          onEdit={editTileHandler}
        />
      ))}
    </ul>
  );
};

export default MeetupGrid;
