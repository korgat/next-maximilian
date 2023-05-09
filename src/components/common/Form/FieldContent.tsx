import { Path, UseFormRegister } from 'react-hook-form';

interface FieldContent<T> {
  className?: string;
  rows?: number;
  label: Path<T>;
  type?: string;
  baseClass: string[];
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

function FieldContent<T>({
  register,
  label,
  className,
  registerConf,
  errorMessage,
  baseClass,
  type = 'text',
  ...props
}: FieldContent<T>) {
  switch (type) {
    case 'textArea':
      return (
        <>
          <label className="block font-semibold mb-2 px-2 capitalize">{label}</label>
          <textarea
            className={baseClass.join(' ') + ' w-full resize-none'}
            {...register(label, registerConf)}
            {...props}></textarea>
        </>
      );
    case 'checkbox':
      return (
        <>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 checked:bg-blue-500"
              {...register(label, registerConf)}
              {...props}
            />
            <span className="ml-2 font-semibold capitalize">{label}</span>
          </label>
        </>
      );
    default:
      return (
        <>
          <label className="block font-semibold mb-2 px-2 capitalize">{label}</label>
          <input type={type} className={baseClass.join(' ')} {...register(label, registerConf)} />
        </>
      );
  }
}

export default FieldContent;
