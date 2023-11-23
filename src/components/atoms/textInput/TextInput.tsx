import { useEffect, useState } from 'react';
import './TextInput.scss';

interface TextInputProps {
  type?: 'text' | 'password' | 'email' | 'url' | 'date';
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  onChangeInput?: (value: string) => void;
}

export const TextInput = ({
  type = 'text',
  value,
  placeholder,
  disabled,
  error,
  className = '',
  onChangeInput,
}: TextInputProps) => {
  // const [inputValue, setInputValue] = useState(value);

  // useEffect(() => {
  //   setInputValue(value);
  // }, [value]);

  // const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.currentTarget.value);
  // };

  return (
    <input
      type={type}
      // value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChangeInput && onChangeInput(e.target.value)}
      className={['text-input', error && `text-input--error`, className].join(
        ' '
      )}
    />
  );
};
