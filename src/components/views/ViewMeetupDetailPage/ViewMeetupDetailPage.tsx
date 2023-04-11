import { MeetupI } from '@interfaces/api/types';

interface ViewMeetupDetailPageI {
  meetup: MeetupI;
}

const ViewMeetupDetailPage: React.FC<ViewMeetupDetailPageI> = ({ meetup }) => {
  return <div>Detail</div>;
};

export default ViewMeetupDetailPage;
