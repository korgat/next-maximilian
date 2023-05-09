import { ViewAllMeetupsPage } from '@components/views/ViewAllMeetupsPage';
import { MeetupI } from '@interfaces/api/types';
import { MongoClient, ObjectId } from 'mongodb';
import { meetupsMock } from '../../__mock__/meetups';

interface MeetUpsPagePropsI {
  meetups: MeetupI[];
}

const MeetUpsPage: React.FC<MeetUpsPagePropsI> = ({ meetups }) => {
  return <ViewAllMeetupsPage meetups={meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();

  const meetups = await db.collection<MeetupI<ObjectId>>('meetups').find().toArray();

  client.close();

  return {
    props: { meetups: meetups.map((obj) => ({ ...obj, _id: obj._id.toString() })) },
  };
}

export default MeetUpsPage;
