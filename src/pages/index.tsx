import ViewHomePage from '@components/views/ViewHomePage/ViewHomePage';
import { meetupsMock } from '../__mock__/meetups';

export default function HomePage() {
  const importantMeetups = meetupsMock.filter((obj) => obj.isImportant);
  return <ViewHomePage meetups={importantMeetups} />;
}
