import MeetupRow from './MeetupRow';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { meetupAPI } from '@api/meetup';
import { FetchMethodsE } from '@api/meetup/types';
import { MeetupI } from '@interfaces/api/types';

interface MeetupListI {
  meetups: MeetupI[];
}

const MeetupsList: React.FC<MeetupListI> = ({ meetups }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['meetup'],
    initialData: { data: meetups },
    queryFn: () => meetupAPI.getMeetups(),
  });

  const { mutate } = useMutation({
    mutationFn: meetupAPI.deleteMeetup,
    onSuccess: (res) => {
      queryClient.invalidateQueries(['meetup']);
    },
  });

  const deleteMeetupHandler = (id: string) => {
    mutate({ path: `/${id}`, method: FetchMethodsE.DELETE });
  };

  const editMeetupHandler = (id: string) => {
    router.push(`/addMeetup/${id}`);
  };
  return (
    <ul>
      {data?.data.map((obj) => (
        <MeetupRow
          key={obj._id}
          {...obj}
          onDelete={deleteMeetupHandler}
          onEdit={editMeetupHandler}
        />
      ))}
    </ul>
  );
};

export default MeetupsList;
