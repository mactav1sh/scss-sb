import { ReactNode } from 'react';
import './Button.scss';

interface IProps {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  backgroundColor?: string;
  variant?: 'edit' | 'delete';
  onClick?: () => void;
}

// TODO: INSTEAD OF CONTENT USE CHILDREN
// TODO: CREATE A PR REQUEST TO MAIN BRANCH

const Button = ({
  children = 'click me',
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
      {children}
    </button>
  );
};

export default Button;
