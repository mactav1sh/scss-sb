import { ReactNode } from 'react';
import './Button.scss';

interface IProps {
  content?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  backgroundColor?: string;
  variant?: 'edit' | 'delete';
  onClick?: () => void;
}

const Button = ({
  content = 'click me',
  size = 'small',
  color,
  backgroundColor,
  variant,
  ...props
}: IProps) => {
  return (
    <button
      type="button"
      className={`btn btn--${size} ${variant && 'btn--' + variant}`}
      style={{ color, backgroundColor }}
      {...props}
    >
      <div className="btn__contentWrapper">{content}</div>
    </button>
  );
};

export default Button;
