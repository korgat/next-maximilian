import { MeetupI } from '@interfaces/api/types';
import React from 'react';
import MeetupRow from './MeetupRow';

interface MeetupListI {
  meetups: MeetupI[];
}

const MeetupsList: React.FC<MeetupListI> = ({ meetups }) => {
  const deleteMeetupHandler = (id: number) => {};

  const editMeetupHandler = (id: number) => {};
  return (
    <ul>
      {meetups.map((obj) => (
        <MeetupRow
          key={obj.id}
          {...obj}
          onDelete={deleteMeetupHandler}
          onEdit={editMeetupHandler}
        />
      ))}
    </ul>
  );
};

export default MeetupsList;
