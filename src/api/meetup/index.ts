import { createQueryString } from '@utils/helpers/api';
import { ConfigI, CreateMeetupResI, meetupResI } from './types';

export const meetupAPI = {
  async getMeetups(config?: ConfigI): Promise<meetupResI> {
    let query = '';
    if (config?.params) {
      query = createQueryString(config.params);
    }

    return fetch('/api/meetup' + query)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status.toString());
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  createMeetup(config: ConfigI): Promise<CreateMeetupResI> {
    return fetch('/api/meetup', {
      method: config.method ?? 'PUT',
      headers: config.headers ?? {
        'Content-Type': 'application/json',
      },
      body: config.body ?? null,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status.toString());
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  deleteMeetup(config: ConfigI): Promise<CreateMeetupResI> {
    return fetch(`/api/meetup${config.path}`, {
      method: config.method ?? 'PUT',
      headers: config.headers ?? {
        'Content-Type': 'application/json',
      },
      body: config.body ?? null,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status.toString());
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};
