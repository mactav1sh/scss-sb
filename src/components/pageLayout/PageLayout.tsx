import { ReactNode } from 'react';
import Button from '../button/Button';
import './PageLayout.scss';
interface IProps {
  children: ReactNode;
  heading: string;
  buttonLabel?: string;
}

const PageLayout = ({ children, heading, buttonLabel }: IProps) => {
  return (
    <div className="page-layout">
      <div className="header">
        <h1 className="header-text">{heading}</h1>
        <Button
          children={buttonLabel}
          backgroundColor="#3b82f6"
          color="#fff"
          size="medium"
        />
      </div>
      <div className="wrapper">{children}</div>
    </div>
  );
};
export default PageLayout;
