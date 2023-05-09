import Modal from '@components/common/Modal/Modal';
import { Button } from '@components/ui/Button';
import { useState } from 'react';

const ViewAboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const subscribeClickHandler = () => {
    setShowModal(true);
  };
  const confirmModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="container mx-auto px-4 mt-10 mb-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to my website</h1>
        <p className="text-gray-800 mb-4">
          We are a team of passionate individuals who are dedicated to creating a community-driven
          platform that connects people with similar interests and passions. Our mission is to
          provide a space where people can come together, learn, and grow through shared
          experiences.
        </p>
        <p className="text-gray-800 mb-4">
          Our website offers a wide range of meetups, events, and activities that cater to various
          interests and skill levels. Whether you&#39;re a beginner or an expert, you&#39;ll find
          something that suits your needs.
        </p>
        <p className="text-gray-800 mb-4">
          Our team is made up of experienced organizers, event planners, and volunteers who are
          committed to creating a welcoming and inclusive environment for all members. We believe
          that everyone has something to offer, and that by coming together, we can achieve great
          things.
        </p>
        <p className="text-gray-800 mb-4">
          At our meetups, you'll have the opportunity to connect with like-minded individuals, learn
          new skills, and have fun. We organize a variety of events, including workshops, talks,
          social gatherings, and more. Our events are designed to provide a safe and supportive
          space where you can explore your passions, expand your horizons, and connect with others.
        </p>
        <p className="text-gray-800 mb-4">
          We're always looking for new members to join our community. If you're interested in
          getting involved, please don't hesitate to get in touch. We'd love to hear from you!
        </p>
        <p className="text-gray-800 mb-10">
          Thank you for visiting our website. We hope to see you at one of our meetups soon!
        </p>
        <Button text="Subscribe" fill="true" onClick={subscribeClickHandler} />
      </div>
      {showModal && (
        <Modal
          className="justify-center items-center"
          onClose={() => setShowModal(false)}
          onConfirm={confirmModalHandler}>
          tyuyu
        </Modal>
      )}
    </>
  );
};

export default ViewAboutPage;
