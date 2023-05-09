import { MeetupI } from '@interfaces/api/types';
import { MongoClient, ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type GetData = {
  data: MeetupI[];
};

type UpdateData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetData | UpdateData>,
) {
  switch (req.method) {
    case 'DELETE':
      {
        const client = await MongoClient.connect(
          'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
        );

        const db = client.db();
        if (typeof req.query.id === 'string') {
          const itemId = req.query.id;

          await db.collection('meetups').deleteOne({ _id: new ObjectId(itemId) });
        }

        client.close();

        res.status(200).json({ message: 'successfully deleted' });
      }
      break;

    default:
      break;
  }
}
