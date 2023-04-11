import { Button } from '@components/ui/Button';
import React, { useEffect, useState } from 'react';

interface FormI {
  children: React.ReactNode;
}

const Form: React.FC<FormI> = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newChildren, setNewChildren] = useState();
  const [fieldsStatus, setFieldsStatus] = useState<{ [key: string]: boolean }>({});

  const fieldStatusHandler = (fieldName: string) => {
    setFieldsStatus((prev) => {
      const newFieldsStatus = prev;
      newFieldsStatus[fieldName] = true;
      return newFieldsStatus;
    });
  };

  useEffect(() => {
    const childrenWithProps = React.Children.map(children, (child) => {
      if (
        React.isValidElement(child) &&
        typeof child.type !== 'string' &&
        child.type.name === 'FormField'
      ) {
        setFieldsStatus((prev) => ({ ...prev, [child.props.name]: false }));
        return React.cloneElement(child as React.ReactElement, { fieldStatusHandler, isSubmitted });
      }
      return child;
    });
    setNewChildren(childrenWithProps);
  }, [children, isSubmitted]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const isValidForm = Object.values(fieldsStatus).every((isValid) => isValid);
    if (isValidForm) {
      console.log('send--', data);
    }
  };

  return newChildren ? (
    <form onSubmit={submitHandler}>
      {newChildren}
      <Button text="Submit" fill="true" />
    </form>
  ) : null;
};

export default Form;
