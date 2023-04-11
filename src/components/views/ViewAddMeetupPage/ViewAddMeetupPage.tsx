import FormField from '@components/common/Form/FormField';

import { Button } from '@components/ui/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
type InputsT = {
  title: string;
  address: string;
  image: string;
  description: string;
};

const ViewAddMeetupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsT>();

  const submitHandler: SubmitHandler<InputsT> = (data) => {
    // console.log('success');
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormField
          label="title"
          register={register}
          registerConf={{
            required: 'field is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Only characters',
            },
          }}
          errorMessage={errors.title?.message}
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
            minLength: {
              value: 30,
              message: 'Description must be at least 30 characters',
            },
          }}
          errorMessage={errors.description?.message}
        />
        <Button className="mt-10" text="Add meetup" fill="true" />
      </form>
    </div>
  );
};

export default ViewAddMeetupPage;
