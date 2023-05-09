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
  const aa = 78;
  switch (req.method) {
    case 'GET':
      {
        const client = await MongoClient.connect(
          'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
        );

        const db = client.db();
        let filter = {};
        if (req.query.isImportant) {
          filter = {
            isImportant: true,
          };
        }

        const meetups = await db.collection<MeetupI<ObjectId>>('meetups').find(filter).toArray();

        client.close();
        const data: GetData = { data: meetups.map((obj) => ({ ...obj, _id: obj._id.toString() })) };
        res.status(200).json(data);
      }
      break;
    case 'PUT':
      {
        const data: MeetupI<string> = req.body;
        const newItem = {
          $set: {
            address: data.address,
            date: data.date,
            description: data.description,
            image: data.image,
            isImportant: data.isImportant,
            shortDesc: data.shortDesc,
            title: data.title,
          },
        };
        const client = await MongoClient.connect(
          'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
        );
        const db = client.db();

        const result = await db
          .collection<MeetupI<ObjectId>>('meetups')
          .updateOne({ _id: new ObjectId(data._id) }, newItem);

        client.close();

        res.status(200).json({ message: 'successfully updated' });
      }
      break;
    case 'POST':
      {
        const data: MeetupI<string> = req.body;
        const newItem = {
          address: data.address,
          date: data.date,
          description: data.description,
          image: data.image,
          isImportant: data.isImportant,
          shortDesc: data.shortDesc,
          title: data.title,
        };

        const client = await MongoClient.connect(
          'mongodb+srv://testNext:ggal2HSwPdgnlvOX@cluster0.arjhm.mongodb.net/meetups?retryWrites=true&w=majority',
        );
        const db = client.db();

        const result = await db.collection('meetups').insertOne(newItem);

        res.status(200).json({ message: 'successfully added' });
      }
      break;

    default:
      break;
  }
}
