import { MeetupI } from '@interfaces/api/types';
import Image from 'next/image';

interface ViewMeetupDetailPageI {
  meetup?: MeetupI;
}

const ViewMeetupDetailPage: React.FC<ViewMeetupDetailPageI> = ({ meetup }) => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-4xl font-bold">Meetup Title</h1>
        <p className="text-gray-600">Date: April 20, 2023</p>
      </div>
      <section className="py-4">
        <h2 className="text-2xl font-bold">Location</h2>
        <p className="text-gray-600">123 Main Street, Anytown, USA</p>
      </section>
      <section className="py-4 relative h-[500px]">
        <Image fill src="https://wallpapercave.com/wp/wp9045170.jpg" alt="meetup" />
      </section>
      <section className="py-4">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque leo sit amet
          tellus laoreet, sed dictum mauris pulvinar. Nunc auctor dolor id nibh malesuada, vitae
          faucibus quam laoreet. Duis ullamcorper pretium sapien, at bibendum elit pharetra vel.
        </p>
      </section>
    </div>
  );
};

export default ViewMeetupDetailPage;
