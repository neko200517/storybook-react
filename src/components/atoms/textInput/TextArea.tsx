import './TextInput.scss';

interface TextInputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export const TextArea = ({
  value,
  placeholder,
  disabled,
  error,
}: TextInputProps) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={['text-area', error && `text-area--error`].join(' ')}
      cols={30}
      rows={10}
    ></textarea>
  );
};
