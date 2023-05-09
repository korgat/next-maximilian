import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { meetupAPI } from '@api/meetup';
import { FetchMethodsE } from '@api/meetup/types';
import { MeetupI } from '@interfaces/api/types';

import MeetupTile from './MeetupTile';

interface MeetupListProps {
  meetups: MeetupI[];
  highLightImportant?: boolean;
}

const MeetupGrid: React.FC<MeetupListProps> = ({ meetups, highLightImportant }) => {
  const router = useRouter();
  const { mutate } = useMutation({ mutationFn: meetupAPI.deleteMeetup });

  const editTileHandler = (id: string) => {
    router.push(`/addMeetup/${id}`);
  };
  const deleteTileHandler = (id: string) => {
    mutate({ path: `/${id}`, method: FetchMethodsE.DELETE });
  };

  return (
    <ul className="grid grid-cols-2 gap-8">
      {meetups.map((obj) => (
        <MeetupTile
          key={obj._id}
          title={obj.title}
          image={obj.image}
          _id={obj._id}
          shortDesc={obj.shortDesc}
          description={obj.description}
          date={obj.date}
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
