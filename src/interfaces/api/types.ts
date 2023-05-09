import { ObjectId } from 'mongodb';

export interface UserI {
  name: string;
  photo: string;
}
export interface MeetupI<T = string> {
  title: string;
  image: string;
  address: string;
  shortDesc: string;
  isImportant: boolean;
  description: string;
  date: string;
  _id: T;
}
