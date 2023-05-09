import { Path, UseFormRegister } from 'react-hook-form';
import FieldContent from './FieldContent';

interface FormFieldI<T> {
  className?: string;
  rows?: number;
  label: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  registerConf?: {
    required?: string;
    validate?: (value: string) => boolean | string;
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
      <FieldContent
        register={register}
        label={label}
        baseClass={baseClass}
        registerConf={registerConf}
        type={type}
        {...props}
      />
      {errorMessage && <div className="text-red-500 absolute bottom-0 px-2">{errorMessage}</div>}
    </div>
  );
}

export default FormField;
