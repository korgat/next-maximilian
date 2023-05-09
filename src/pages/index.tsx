import ViewHomePage from '@components/views/ViewHomePage/ViewHomePage';
import { MeetupI } from '@interfaces/api/types';
import { MongoClient, ObjectId } from 'mongodb';

interface HomePagePropsI {
  meetups: MeetupI[];
}

const HomePage: React.FC<HomePagePropsI> = ({ meetups }) => {
  return <ViewHomePage meetups={meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();

  const meetups = await db
    .collection<MeetupI<ObjectId>>('meetups')
    .find({ isImportant: true })
    .toArray();

  client.close();

  return {
    props: { meetups: meetups.map((obj) => ({ ...obj, _id: obj._id.toString() })) },
  };
}

export default HomePage;
