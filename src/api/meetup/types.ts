import { MeetupI } from './../../interfaces/api/types';

export enum FetchMethodsE {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface ConfigI {
  path?: string;
  params?: { [key: string]: string | number | boolean };
  body?: BodyInit;
  method?: FetchMethodsE;
  headers?: {
    [key: string]: string;
  };
}

export interface CreateMeetupResI {
  message: string;
}

export interface meetupResI {
  data: MeetupI[];
}
