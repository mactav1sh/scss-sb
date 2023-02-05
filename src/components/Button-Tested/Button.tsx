import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  loading?: boolean;
  onClick?: (e?: any) => void;
  onMouseDown?: () => void;
};

function Button({ children, onClick, onMouseDown, loading }: Props) {
  return (
    <button onClick={onClick} onMouseDown={onMouseDown}>
      <span>{children}</span>
      {loading && <div>loading...</div>}
    </button>
  );
}

export default Button;
