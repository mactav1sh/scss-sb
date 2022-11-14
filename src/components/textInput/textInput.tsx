import { useState } from 'react';
import './textInput.scss';
interface IProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ placeholder = 'enter text', onChange }: IProps) => {
  const [text, setText] = useState<string>('');

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // passdown the event to the props function
    onChange && onChange(e);
  };

  return (
    <input
      value={text}
      onChange={handleChnage}
      placeholder={placeholder}
      type="text"
      className="textInput"
    />
  );
};

export default TextInput;
