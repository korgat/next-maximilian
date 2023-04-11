import { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface FormFieldI<T> {
  className?: string;
  rows?: number;
  label: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  registerConf?: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  errorMessage?: string | undefined;
}

function FormField<T>({
  register,
  label,
  className,
  registerConf,
  errorMessage,
  type = 'text',
  ...props
}: FormFieldI<T>) {
  const baseClass = ['w-full rounded-lg border px-4 py-2'];
  className && baseClass.push(className);
  !errorMessage && baseClass.push('border-gray-300');
  errorMessage && baseClass.unshift('border-red-500');

  return (
    <div className="relative pb-6">
      <label className="block font-semibold mb-2 px-2 capitalize">{label}</label>
      {type === 'textArea' ? (
        <textarea
          className={baseClass.join(' ') + ' w-full resize-none'}
          {...register(label, registerConf)}
          {...props}></textarea>
      ) : (
        <input type={type} className={baseClass.join(' ')} {...register(label, registerConf)} />
      )}
      {errorMessage && <div className="text-red-500 absolute bottom-0 px-2">{errorMessage}</div>}
    </div>
  );
}

export default FormField;
