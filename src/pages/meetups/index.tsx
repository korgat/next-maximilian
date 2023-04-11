import { ViewAllMeetupsPage } from '@components/views/ViewAllMeetupsPage';
import { meetupsMock } from '../../__mock__/meetups';

const MeetUpsPage = () => {
  return <ViewAllMeetupsPage meetups={meetupsMock} />;
};

export default MeetUpsPage;
