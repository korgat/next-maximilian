import MeetupsList from '@components/common/Meetup/MeetupList';
import { MeetupI } from '@interfaces/api/types';

interface ViewAllMeetupsPageI {
  meetups: MeetupI[];
}

const ViewAllMeetupsPage: React.FC<ViewAllMeetupsPageI> = ({ meetups }) => {
  return (
    <div className="mt-10">
      <MeetupsList meetups={meetups} />
    </div>
  );
};

export default ViewAllMeetupsPage;
