import { meetupAPI } from '@api/meetup';
import { FetchMethodsE } from '@api/meetup/types';
import FormField from '@components/common/Form/FormField';

import { Button } from '@components/ui/Button';
import { MeetupI } from '@interfaces/api/types';
import { useMutation } from '@tanstack/react-query';
import { truncateString } from '@utils/helpers/string';
import { isValidDate, isValidImage, isValidTitle } from '@utils/validation/meetup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { InputsT } from './types';

interface ViewAddMeetupPagePropsI {
  meetup?: MeetupI;
}

const ViewAddMeetupPage: React.FC<ViewAddMeetupPagePropsI> = ({ meetup }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsT>({
    defaultValues: {
      title: meetup?.title ?? '',
      address: meetup?.address ?? '',
      description: meetup?.description ?? '',
      image: meetup?.image ?? '',
      date: meetup?.date ?? '',
      isImportant: meetup?.isImportant ?? false,
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (newMeetup: InputsT) => {
      return meetupAPI.createMeetup({
        body: JSON.stringify(newMeetup),
        method: meetup ? FetchMethodsE.PUT : FetchMethodsE.POST,
      });
    },
    onSuccess: (res) => router.replace('/'),
  });

  const onSubmit = (formData: InputsT) => {
    const newMeetup: InputsT = {
      address: formData.address,
      date: formData.date,
      description: formData.description,
      image: formData.image,
      isImportant: formData.isImportant,
      shortDesc: truncateString(formData.description),
      title: formData.title,
    };
    if (meetup) {
      newMeetup._id = meetup?._id;
    }
    mutate(newMeetup);
  };

  return (
    <div className={`mt-10 mx-auto w-[700px] ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="title"
          register={register}
          registerConf={{
            required: 'field is required',
            validate: (inp) => isValidTitle(inp) || 'Only characters and spaces',
          }}
          errorMessage={errors.title?.message}
        />
        <FormField
          label="date"
          register={register}
          registerConf={{
            required: 'field is required',
            validate: (inp) =>
              isValidDate(inp) || 'Date must be similar to this pattern {2012-01-01}',
          }}
          errorMessage={errors.date?.message}
        />
        <FormField
          label="address"
          register={register}
          registerConf={{
            required: 'field is required',
          }}
          errorMessage={errors.address?.message}
        />
        <FormField
          label="image"
          register={register}
          registerConf={{
            required: 'field is required',
            validate: (inp) =>
              isValidImage(inp) || 'Only URL path from "https://wallpapercave.com/..." allowed',
          }}
          errorMessage={errors.image?.message}
        />
        <FormField
          label="description"
          rows={10}
          register={register}
          type="textArea"
          registerConf={{
            required: 'field is required',
            validate: (inp) => inp.length > 29 || 'Description must be at least 30 characters',
          }}
          errorMessage={errors.description?.message}
        />
        <FormField label="isImportant" type="checkbox" register={register} />
        <Button className="mt-5" text={meetup ? 'Edit meetup' : 'Add meetup'} fill="true" />
      </form>
    </div>
  );
};

export default ViewAddMeetupPage;
