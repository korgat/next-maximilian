import MeetupGrid from '@components/common/Meetup/MeetupGrid';
import { Button } from '@components/ui/Button';
import { IconsE } from '@components/ui/Icon/Icon.types';
import { MeetupI } from '@interfaces/api/types';

interface ViewHomePageI {
  meetups: MeetupI[];
}

const ViewHomePage: React.FC<ViewHomePageI> = ({ meetups }) => {
  return (
    <div className="mt-10">
      <MeetupGrid meetups={meetups} />
    </div>
  );
};

export default ViewHomePage;
