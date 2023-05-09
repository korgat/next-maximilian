import ViewAddMeetupPage from '@components/views/ViewAddMeetupPage/ViewAddMeetupPage';
import { MeetupI } from '@interfaces/api/types';
import { MongoClient, ObjectId } from 'mongodb';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface EditMeetupPagePropsI {
  meetup: MeetupI;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const EditMeetupPage: React.FC<EditMeetupPagePropsI> = ({ meetup }) => {
  console.log(meetup);

  return <ViewAddMeetupPage meetup={meetup} />;
};

export const getStaticProps: GetStaticProps<EditMeetupPagePropsI, Params> = async (context) => {
  const meetupId = context?.params?.id;
  console.log(meetupId);

  const client = await MongoClient.connect(
    'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();

  const meetup = await db
    .collection<MeetupI<ObjectId>>('meetups')
    .findOne({ _id: new ObjectId(meetupId) });

  if (!meetup) {
    return {
      notFound: true,
    };
  }

  const withProperId = { ...meetup, _id: meetup?._id.toString() };
  client.close();

  return {
    props: { meetup: withProperId },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();

  const meetups = await db
    .collection('meetups')
    .find({}, { projection: { _id: 1 } })
    .limit(5)
    .toArray();

  const paths = meetups.map((meetup) => ({
    params: { id: meetup._id.toString() },
  }));

  client.close();
  return {
    paths,
    fallback: 'blocking',
  };
};

export default EditMeetupPage;
