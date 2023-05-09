import { meetupAPI } from '@api/meetup';
import MeetupGrid from '@components/common/Meetup/MeetupGrid';
import { Button } from '@components/ui/Button';
import { IconsE } from '@components/ui/Icon/Icon.types';
import { MeetupI } from '@interfaces/api/types';
import { useQuery } from '@tanstack/react-query';

interface ViewHomePageI {
  meetups: MeetupI[];
}

const ViewHomePage: React.FC<ViewHomePageI> = ({ meetups }) => {
  const { data } = useQuery({
    queryKey: ['meetup', { isImportant: true }],
    initialData: { data: meetups },
    queryFn: (keys) => {
      return meetupAPI.getMeetups({ params: { isImportant: true } });
    },
  });

  return (
    <div className="mt-10">
      <MeetupGrid meetups={data.data} />
    </div>
  );
};

export default ViewHomePage;
