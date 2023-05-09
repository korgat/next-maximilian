import FormField from '@components/common/Form/FormField';
import Modal from '@components/common/Modal/Modal';
import { Button } from '@components/ui/Button';
import { isValidEmail } from '@utils/helpers/validation';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type SubscribeFormValuesT = {
  email: string;
  receiveNotification: boolean;
};

const ViewAboutPage = () => {
  const [showModal, setShowModal] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeFormValuesT>({
    defaultValues: {
      email: '',
      receiveNotification: false,
    },
  });

  const submitHandler = (formData: SubscribeFormValuesT) => {
    console.log(formData);

    setShowModal(false);
  };

  const subscribeClickHandler = () => {
    setShowModal(true);
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
          modalClassName="bg-white rounded-lg py-5 px-5"
          onClose={setShowModal.bind(null, false)}>
          <form className="w-[300px]" onSubmit={handleSubmit(submitHandler)}>
            <FormField
              label="email"
              register={register}
              registerConf={{
                required: 'field is required',
                validate: (inp) => isValidEmail(inp) || 'Invalid email',
              }}
              errorMessage={errors.email?.message}
            />
            <FormField label="receiveNotification" type="checkbox" register={register} />
            <div className="flex justify-end gap-2">
              <Button type="submit" className="mt-5" text="Subscribe" fill="true" />
              <Button
                className="mt-5"
                outlined="true"
                text="Cancel"
                onClick={setShowModal.bind(null, false)}
              />
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ViewAboutPage;
